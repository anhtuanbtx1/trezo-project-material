import { useState, useEffect, useCallback } from 'react';
import guestService from '../services/guestService';

export const useGuests = (initialParams = {}) => {
  const [guests, setGuests] = useState([]);
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
      status: '',
      membershipType: '',
      nationality: '',
      currentlyStaying: null,
      dateRange: { start: null, end: null }
    },
    available: {
      statuses: [],
      membershipTypes: [],
      nationalities: [],
      genders: [],
      idTypes: []
    }
  });
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch guests with current parameters
  const fetchGuests = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const mergedParams = { ...initialParams, ...params };
      const response = await guestService.getGuests(mergedParams);
      
      if (response.success) {
        setGuests(response.data.guests);
        setPagination(response.data.pagination);
        setFilters(response.data.filters);
        setStatistics(response.data.statistics);
      } else {
        setError(response.error || { message: response.message });
      }
    } catch (err) {
      setError({
        code: 'FETCH_ERROR',
        message: 'Failed to fetch guests',
        details: err.message
      });
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  // Search guests
  const searchGuests = useCallback(async (searchQuery) => {
    await fetchGuests({ 
      ...filters.applied, 
      search: searchQuery, 
      page: 1 
    });
  }, [fetchGuests, filters.applied]);

  // Filter guests
  const filterGuests = useCallback(async (filterParams) => {
    const newFilters = { ...filters.applied, ...filterParams, page: 1 };
    await fetchGuests(newFilters);
  }, [fetchGuests, filters.applied]);

  // Change page
  const changePage = useCallback(async (newPage) => {
    await fetchGuests({ ...filters.applied, page: newPage });
  }, [fetchGuests, filters.applied]);

  // Change page size
  const changePageSize = useCallback(async (newPageSize) => {
    await fetchGuests({ 
      ...filters.applied, 
      limit: newPageSize, 
      page: 1 
    });
  }, [fetchGuests, filters.applied]);

  // Sort guests
  const sortGuests = useCallback(async (sortBy, sortOrder = 'asc') => {
    await fetchGuests({ 
      ...filters.applied, 
      sortBy, 
      sortOrder 
    });
  }, [fetchGuests, filters.applied]);

  // Get single guest
  const getGuest = useCallback(async (guestId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.getGuestById(guestId);
      
      if (response.success) {
        return response.data.guest;
      } else {
        setError(response.error || { message: response.message });
        return null;
      }
    } catch (err) {
      const error = {
        code: 'FETCH_ERROR',
        message: 'Failed to fetch guest details',
        details: err.message
      };
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Create guest
  const createGuest = useCallback(async (guestData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.createGuest(guestData);
      
      if (response.success) {
        // Refresh the list after creating
        await fetchGuests(filters.applied);
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'CREATE_ERROR',
        message: 'Failed to create guest',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [fetchGuests, filters.applied]);

  // Update guest
  const updateGuest = useCallback(async (guestId, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.updateGuest(guestId, updateData);
      
      if (response.success) {
        // Update the guest in the current list
        setGuests(prevGuests => 
          prevGuests.map(guest => 
            guest.id === guestId 
              ? { ...guest, ...updateData }
              : guest
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
        message: 'Failed to update guest',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete guest
  const deleteGuest = useCallback(async (guestId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.deleteGuest(guestId);
      
      if (response.success) {
        // Remove the guest from the current list
        setGuests(prevGuests => prevGuests.filter(guest => guest.id !== guestId));
        
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
        message: 'Failed to delete guest',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Add note to guest
  const addGuestNote = useCallback(async (guestId, noteData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.addGuestNote(guestId, noteData);
      
      if (response.success) {
        // Update the guest's notes in the current list
        setGuests(prevGuests => 
          prevGuests.map(guest => 
            guest.id === guestId 
              ? { 
                  ...guest, 
                  notes: [...(guest.notes || []), response.data.note]
                }
              : guest
          )
        );
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'ADD_NOTE_ERROR',
        message: 'Failed to add note',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Bulk update guests
  const bulkUpdateGuests = useCallback(async (guestIds, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.bulkUpdateGuests(guestIds, updateData);
      
      if (response.success) {
        // Update the guests in the current list
        setGuests(prevGuests => 
          prevGuests.map(guest => 
            guestIds.includes(guest.id) 
              ? { ...guest, ...updateData }
              : guest
          )
        );
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'BULK_UPDATE_ERROR',
        message: 'Failed to bulk update guests',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Bulk delete guests
  const bulkDeleteGuests = useCallback(async (guestIds) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.bulkDeleteGuests(guestIds);
      
      if (response.success) {
        // Remove the guests from the current list
        setGuests(prevGuests => 
          prevGuests.filter(guest => !guestIds.includes(guest.id))
        );
        
        // Update pagination
        setPagination(prev => ({
          ...prev,
          totalItems: prev.totalItems - guestIds.length
        }));
        
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'BULK_DELETE_ERROR',
        message: 'Failed to bulk delete guests',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Get guest statistics
  const getStatistics = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await guestService.getGuestStatistics();
      
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
    fetchGuests(filters.applied);
  }, [fetchGuests, filters.applied]);

  // Initial load
  useEffect(() => {
    fetchGuests();
  }, [fetchGuests]);

  return {
    // Data
    guests,
    pagination,
    filters,
    statistics,
    loading,
    error,
    
    // Actions
    fetchGuests,
    searchGuests,
    filterGuests,
    changePage,
    changePageSize,
    sortGuests,
    getGuest,
    createGuest,
    updateGuest,
    deleteGuest,
    addGuestNote,
    bulkUpdateGuests,
    bulkDeleteGuests,
    getStatistics,
    clearError,
    refresh
  };
};

export default useGuests;
