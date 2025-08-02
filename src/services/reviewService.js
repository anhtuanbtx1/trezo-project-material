// Review Service - Mock API service for loading review JSON data
import reviewsData from '../data/hotel/reviews.json';

class ReviewService {
  constructor() {
    this.baseDelay = 500; // Simulate network delay
  }

  // Simulate API delay
  delay(ms = this.baseDelay) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all reviews with filtering and pagination
  async getReviews(params = {}) {
    await this.delay();
    
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        rating = null,
        hotelId = '',
        roomId = '',
        guestType = '',
        dateRange = { start: null, end: null },
        verified = null,
        hasPhotos = null,
        language = '',
        sortBy = 'date',
        sortOrder = 'desc'
      } = params;

      let filteredReviews = [...reviewsData.data.reviews];

      // Apply search filter
      if (search) {
        filteredReviews = filteredReviews.filter(review =>
          review.title.toLowerCase().includes(search.toLowerCase()) ||
          review.comment.toLowerCase().includes(search.toLowerCase()) ||
          review.guest.name.toLowerCase().includes(search.toLowerCase()) ||
          review.roomName.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply rating filter
      if (rating !== null) {
        filteredReviews = filteredReviews.filter(review => review.rating.overall === rating);
      }

      // Apply hotel filter
      if (hotelId) {
        filteredReviews = filteredReviews.filter(review => review.hotel.id === hotelId);
      }

      // Apply room filter
      if (roomId) {
        filteredReviews = filteredReviews.filter(review => review.roomId === roomId);
      }

      // Apply guest type filter
      if (guestType) {
        filteredReviews = filteredReviews.filter(review => 
          review.stayDetails.groupType === guestType
        );
      }

      // Apply date range filter
      if (dateRange.start && dateRange.end) {
        filteredReviews = filteredReviews.filter(review => {
          const reviewDate = new Date(review.metadata.createdAt);
          const startDate = new Date(dateRange.start);
          const endDate = new Date(dateRange.end);
          return reviewDate >= startDate && reviewDate <= endDate;
        });
      }

      // Apply verified filter
      if (verified !== null) {
        filteredReviews = filteredReviews.filter(review => review.guest.isVerified === verified);
      }

      // Apply photos filter
      if (hasPhotos !== null) {
        filteredReviews = filteredReviews.filter(review => 
          hasPhotos ? review.photos.length > 0 : review.photos.length === 0
        );
      }

      // Apply language filter
      if (language) {
        filteredReviews = filteredReviews.filter(review => review.language === language);
      }

      // Apply sorting
      filteredReviews.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortBy) {
          case 'date':
            aValue = new Date(a.metadata.createdAt);
            bValue = new Date(b.metadata.createdAt);
            break;
          case 'rating':
            aValue = a.rating.overall;
            bValue = b.rating.overall;
            break;
          case 'helpful':
            aValue = a.helpfulVotes;
            bValue = b.helpfulVotes;
            break;
          case 'guestName':
            aValue = a.guest.name.toLowerCase();
            bValue = b.guest.name.toLowerCase();
            break;
          case 'roomName':
            aValue = a.roomName.toLowerCase();
            bValue = b.roomName.toLowerCase();
            break;
          default:
            aValue = new Date(a.metadata.createdAt);
            bValue = new Date(b.metadata.createdAt);
        }

        if (sortOrder === 'desc') {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });

      // Apply pagination
      const totalItems = filteredReviews.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedReviews = filteredReviews.slice(startIndex, endIndex);

      return {
        success: true,
        message: "Reviews retrieved successfully",
        data: {
          reviews: paginatedReviews,
          pagination: {
            currentPage: page,
            totalPages,
            totalItems,
            itemsPerPage: limit,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1
          },
          filters: {
            applied: {
              search,
              rating,
              hotelId,
              roomId,
              guestType,
              dateRange,
              verified,
              hasPhotos,
              language
            },
            available: reviewsData.data.filters.available
          },
          statistics: reviewsData.data.statistics
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve reviews",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get single review by ID
  async getReviewById(reviewId) {
    await this.delay();
    
    try {
      const review = reviewsData.data.reviews.find(r => r.id === reviewId);
      
      if (!review) {
        return {
          success: false,
          message: "Review not found",
          error: {
            code: "REVIEW_NOT_FOUND",
            details: `Review with ID ${reviewId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      return {
        success: true,
        message: "Review details retrieved successfully",
        data: { review }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve review details",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Create new review
  async createReview(reviewData) {
    await this.delay();
    
    try {
      const newReview = {
        id: `REV-${Date.now()}`,
        helpfulVotes: 0,
        totalVotes: 0,
        isRecommended: reviewData.rating?.overall >= 4,
        language: 'en',
        status: 'published',
        moderationNotes: '',
        response: null,
        photos: reviewData.photos || [],
        ...reviewData,
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          source: 'direct',
          ipAddress: '192.168.1.100',
          userAgent: 'Mozilla/5.0...',
          isEdited: false
        }
      };

      console.log('Creating review:', newReview);

      return {
        success: true,
        message: "Review created successfully",
        data: { review: newReview }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to create review",
        error: {
          code: "CREATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Update review
  async updateReview(reviewId, updateData) {
    await this.delay();
    
    try {
      const review = reviewsData.data.reviews.find(r => r.id === reviewId);
      
      if (!review) {
        return {
          success: false,
          message: "Review not found",
          error: {
            code: "REVIEW_NOT_FOUND",
            details: `Review with ID ${reviewId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      const updatedReview = {
        ...review,
        ...updateData,
        metadata: {
          ...review.metadata,
          updatedAt: new Date().toISOString(),
          isEdited: true
        }
      };

      console.log('Updating review:', updatedReview);

      return {
        success: true,
        message: "Review updated successfully",
        data: { review: updatedReview }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to update review",
        error: {
          code: "UPDATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Delete review
  async deleteReview(reviewId) {
    await this.delay();
    
    try {
      const reviewIndex = reviewsData.data.reviews.findIndex(r => r.id === reviewId);
      
      if (reviewIndex === -1) {
        return {
          success: false,
          message: "Review not found",
          error: {
            code: "REVIEW_NOT_FOUND",
            details: `Review with ID ${reviewId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      console.log('Deleting review:', reviewId);

      return {
        success: true,
        message: "Review deleted successfully",
        data: { deletedReviewId: reviewId }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to delete review",
        error: {
          code: "DELETE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Add response to review
  async addReviewResponse(reviewId, responseData) {
    await this.delay();
    
    try {
      const newResponse = {
        id: `resp-${Date.now()}`,
        date: new Date().toISOString(),
        ...responseData
      };

      console.log('Adding response to review:', reviewId, newResponse);

      return {
        success: true,
        message: "Response added successfully",
        data: { response: newResponse }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to add response",
        error: {
          code: "ADD_RESPONSE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Vote on review helpfulness
  async voteReviewHelpful(reviewId, isHelpful) {
    await this.delay();
    
    try {
      console.log('Voting on review:', reviewId, isHelpful);

      return {
        success: true,
        message: "Vote recorded successfully",
        data: { 
          reviewId, 
          isHelpful,
          newHelpfulCount: Math.floor(Math.random() * 50) + 1
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to record vote",
        error: {
          code: "VOTE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get review statistics
  async getReviewStatistics(params = {}) {
    await this.delay();
    
    try {
      const { hotelId, roomId, dateRange } = params;
      
      // In a real app, this would filter statistics based on parameters
      let statistics = { ...reviewsData.data.statistics };
      
      if (hotelId || roomId || dateRange) {
        // Apply filters to statistics
        console.log('Filtering statistics for:', params);
      }

      return {
        success: true,
        message: "Review statistics retrieved successfully",
        data: { statistics }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve review statistics",
        error: {
          code: "STATS_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }
}

// Export singleton instance
export default new ReviewService();
