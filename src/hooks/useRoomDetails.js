import { useState, useEffect, useCallback } from 'react';
import hotelService from '../services/hotelService';

export const useRoomDetails = (roomId) => {
  const [roomDetails, setRoomDetails] = useState(null);
  const [relatedRooms, setRelatedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch room details
  const fetchRoomDetails = useCallback(async (id = roomId) => {
    if (!id) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.getRoomDetails(id);
      
      if (response.success) {
        setRoomDetails(response.data.room);
        setRelatedRooms(response.data.relatedRooms || []);
      } else {
        setError(response.error || { message: response.message });
      }
    } catch (err) {
      setError({
        code: 'FETCH_ERROR',
        message: 'Failed to fetch room details',
        details: err.message
      });
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Update room details
  const updateRoomDetails = useCallback(async (updateData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.updateRoom(roomId, updateData);
      
      if (response.success) {
        // Update the room details in state
        setRoomDetails(prevDetails => ({
          ...prevDetails,
          ...updateData,
          metadata: {
            ...prevDetails.metadata,
            updatedAt: new Date().toISOString(),
            lastModifiedBy: "current-user"
          }
        }));
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'UPDATE_ERROR',
        message: 'Failed to update room details',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Add review to room
  const addReview = useCallback(async (reviewData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const newReview = {
        id: `review-${Date.now()}`,
        roomId: roomId,
        date: new Date().toISOString(),
        verified: true,
        helpful: 0,
        ...reviewData
      };

      // Update room details with new review
      setRoomDetails(prevDetails => ({
        ...prevDetails,
        reviews: [...(prevDetails.reviews || []), newReview],
        metadata: {
          ...prevDetails.metadata,
          averageRating: calculateAverageRating([...(prevDetails.reviews || []), newReview])
        }
      }));

      console.log('Adding review to room:', roomId, newReview);

      return {
        success: true,
        message: "Review added successfully",
        data: { review: newReview }
      };
    } catch (err) {
      const error = {
        code: 'ADD_REVIEW_ERROR',
        message: 'Failed to add review',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Add maintenance record
  const addMaintenanceRecord = useCallback(async (maintenanceData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const newMaintenance = {
        id: `maint-${Date.now()}`,
        scheduledDate: new Date().toISOString(),
        status: 'scheduled',
        assignedTo: 'current-user',
        ...maintenanceData
      };

      // Update room details with new maintenance record
      setRoomDetails(prevDetails => ({
        ...prevDetails,
        maintenance: [...(prevDetails.maintenance || []), newMaintenance]
      }));

      console.log('Adding maintenance record to room:', roomId, newMaintenance);

      return {
        success: true,
        message: "Maintenance record added successfully",
        data: { maintenance: newMaintenance }
      };
    } catch (err) {
      const error = {
        code: 'ADD_MAINTENANCE_ERROR',
        message: 'Failed to add maintenance record',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Update room availability
  const updateAvailability = useCallback(async (availabilityData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Update room availability
      setRoomDetails(prevDetails => ({
        ...prevDetails,
        availability: {
          ...prevDetails.availability,
          ...availabilityData
        },
        status: availabilityData.isAvailable ? 'Available' : 'Not Available'
      }));

      console.log('Updating room availability:', roomId, availabilityData);

      return {
        success: true,
        message: "Room availability updated successfully",
        data: { availability: availabilityData }
      };
    } catch (err) {
      const error = {
        code: 'UPDATE_AVAILABILITY_ERROR',
        message: 'Failed to update room availability',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Update room pricing
  const updatePricing = useCallback(async (pricingData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Update room pricing
      setRoomDetails(prevDetails => ({
        ...prevDetails,
        pricing: {
          ...prevDetails.pricing,
          ...pricingData
        },
        rate: {
          ...prevDetails.rate,
          amount: pricingData.baseRate || prevDetails.rate.amount
        }
      }));

      console.log('Updating room pricing:', roomId, pricingData);

      return {
        success: true,
        message: "Room pricing updated successfully",
        data: { pricing: pricingData }
      };
    } catch (err) {
      const error = {
        code: 'UPDATE_PRICING_ERROR',
        message: 'Failed to update room pricing',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Add booking to history
  const addBookingToHistory = useCallback(async (bookingData) => {
    if (!roomId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const newBooking = {
        bookingId: `BK-${Date.now()}`,
        status: 'confirmed',
        ...bookingData
      };

      // Update room details with new booking
      setRoomDetails(prevDetails => ({
        ...prevDetails,
        bookingHistory: [...(prevDetails.bookingHistory || []), newBooking],
        metadata: {
          ...prevDetails.metadata,
          totalBookings: (prevDetails.metadata.totalBookings || 0) + 1
        }
      }));

      console.log('Adding booking to room history:', roomId, newBooking);

      return {
        success: true,
        message: "Booking added to history successfully",
        data: { booking: newBooking }
      };
    } catch (err) {
      const error = {
        code: 'ADD_BOOKING_ERROR',
        message: 'Failed to add booking to history',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  // Helper function to calculate average rating
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((totalRating / reviews.length) * 10) / 10;
  };

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Refresh data
  const refresh = useCallback(() => {
    fetchRoomDetails();
  }, [fetchRoomDetails]);

  // Load room details when roomId changes
  useEffect(() => {
    if (roomId) {
      fetchRoomDetails();
    }
  }, [roomId, fetchRoomDetails]);

  return {
    // Data
    roomDetails,
    relatedRooms,
    loading,
    error,
    
    // Actions
    fetchRoomDetails,
    updateRoomDetails,
    addReview,
    addMaintenanceRecord,
    updateAvailability,
    updatePricing,
    addBookingToHistory,
    clearError,
    refresh
  };
};

export default useRoomDetails;
