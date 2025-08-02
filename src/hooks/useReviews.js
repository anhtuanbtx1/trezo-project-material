import { useState, useEffect, useCallback } from 'react';
import reviewService from '../services/reviewService';

export const useReviews = (initialParams = {}) => {
  const [reviews, setReviews] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
    hasNextPage: false,
    hasPreviousPage: false
  });
  const [filters, setFilters] = useState({
    applied: {
      search: '',
      rating: null,
      hotelId: '',
      roomId: '',
      guestType: '',
      dateRange: { start: null, end: null },
      verified: null,
      hasPhotos: null,
      language: ''
    },
    available: {
      ratings: [],
      hotels: [],
      guestTypes: [],
      languages: [],
      purposes: []
    }
  });
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch reviews with current parameters
  const fetchReviews = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const mergedParams = { ...initialParams, ...params };
      const response = await reviewService.getReviews(mergedParams);
      
      if (response.success) {
        setReviews(response.data.reviews);
        setPagination(response.data.pagination);
        setFilters(response.data.filters);
        setStatistics(response.data.statistics);
      } else {
        setError(response.error || { message: response.message });
      }
    } catch (err) {
      setError({
        code: 'FETCH_ERROR',
        message: 'Failed to fetch reviews',
        details: err.message
      });
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  // Search reviews
  const searchReviews = useCallback(async (searchQuery) => {
    await fetchReviews({ 
      ...filters.applied, 
      search: searchQuery, 
      page: 1 
    });
  }, [fetchReviews, filters.applied]);

  // Filter reviews
  const filterReviews = useCallback(async (filterParams) => {
    const newFilters = { ...filters.applied, ...filterParams, page: 1 };
    await fetchReviews(newFilters);
  }, [fetchReviews, filters.applied]);

  // Change page
  const changePage = useCallback(async (newPage) => {
    await fetchReviews({ ...filters.applied, page: newPage });
  }, [fetchReviews, filters.applied]);

  // Change page size
  const changePageSize = useCallback(async (newPageSize) => {
    await fetchReviews({ 
      ...filters.applied, 
      limit: newPageSize, 
      page: 1 
    });
  }, [fetchReviews, filters.applied]);

  // Sort reviews
  const sortReviews = useCallback(async (sortBy, sortOrder = 'desc') => {
    await fetchReviews({ 
      ...filters.applied, 
      sortBy, 
      sortOrder 
    });
  }, [fetchReviews, filters.applied]);

  // Get single review
  const getReview = useCallback(async (reviewId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.getReviewById(reviewId);
      
      if (response.success) {
        return response.data.review;
      } else {
        setError(response.error || { message: response.message });
        return null;
      }
    } catch (err) {
      const error = {
        code: 'FETCH_ERROR',
        message: 'Failed to fetch review details',
        details: err.message
      };
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Create review
  const createReview = useCallback(async (reviewData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.createReview(reviewData);
      
      if (response.success) {
        // Refresh the list after creating
        await fetchReviews(filters.applied);
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'CREATE_ERROR',
        message: 'Failed to create review',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [fetchReviews, filters.applied]);

  // Update review
  const updateReview = useCallback(async (reviewId, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.updateReview(reviewId, updateData);
      
      if (response.success) {
        // Update the review in the current list
        setReviews(prevReviews => 
          prevReviews.map(review => 
            review.id === reviewId 
              ? { ...review, ...updateData }
              : review
          )
        );
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'UPDATE_ERROR',
        message: 'Failed to update review',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete review
  const deleteReview = useCallback(async (reviewId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.deleteReview(reviewId);
      
      if (response.success) {
        // Remove the review from the current list
        setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
        
        // Update pagination if needed
        setPagination(prev => ({
          ...prev,
          totalItems: prev.totalItems - 1
        }));
        
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'DELETE_ERROR',
        message: 'Failed to delete review',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Add response to review
  const addReviewResponse = useCallback(async (reviewId, responseData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.addReviewResponse(reviewId, responseData);
      
      if (response.success) {
        // Update the review with the new response
        setReviews(prevReviews => 
          prevReviews.map(review => 
            review.id === reviewId 
              ? { ...review, response: response.data.response }
              : review
          )
        );
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'ADD_RESPONSE_ERROR',
        message: 'Failed to add response',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Vote on review helpfulness
  const voteReviewHelpful = useCallback(async (reviewId, isHelpful) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.voteReviewHelpful(reviewId, isHelpful);
      
      if (response.success) {
        // Update the review's helpful votes
        setReviews(prevReviews => 
          prevReviews.map(review => 
            review.id === reviewId 
              ? { 
                  ...review, 
                  helpfulVotes: response.data.newHelpfulCount,
                  totalVotes: response.data.newHelpfulCount + Math.floor(Math.random() * 10)
                }
              : review
          )
        );
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'VOTE_ERROR',
        message: 'Failed to record vote',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Get review statistics
  const getStatistics = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewService.getReviewStatistics(params);
      
      if (response.success) {
        setStatistics(response.data.statistics);
        return response.data.statistics;
      } else {
        setError(response.error || { message: response.message });
        return null;
      }
    } catch (err) {
      const error = {
        code: 'STATS_ERROR',
        message: 'Failed to fetch statistics',
        details: err.message
      };
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Refresh data
  const refresh = useCallback(() => {
    fetchReviews(filters.applied);
  }, [fetchReviews, filters.applied]);

  // Initial load
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    // Data
    reviews,
    pagination,
    filters,
    statistics,
    loading,
    error,
    
    // Actions
    fetchReviews,
    searchReviews,
    filterReviews,
    changePage,
    changePageSize,
    sortReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
    addReviewResponse,
    voteReviewHelpful,
    getStatistics,
    clearError,
    refresh
  };
};

export default useReviews;
