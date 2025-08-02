import { useState, useEffect, useCallback } from 'react';
import hotelService from '../services/hotelService';

export const useHotelRooms = (initialParams = {}) => {
  const [rooms, setRooms] = useState([]);
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
      bedType: '',
      hotelId: '',
      floor: '',
      priceRange: { min: 0, max: 10000 }
    },
    available: {
      statuses: [],
      bedTypes: [],
      hotels: [],
      floors: []
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch rooms with current parameters
  const fetchRooms = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const mergedParams = { ...initialParams, ...params };
      const response = await hotelService.getRooms(mergedParams);
      
      if (response.success) {
        setRooms(response.data.rooms);
        setPagination(response.data.pagination);
        setFilters(response.data.filters);
      } else {
        setError(response.error || { message: response.message });
      }
    } catch (err) {
      setError({
        code: 'FETCH_ERROR',
        message: 'Failed to fetch rooms',
        details: err.message
      });
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  // Search rooms
  const searchRooms = useCallback(async (searchQuery) => {
    await fetchRooms({ 
      ...filters.applied, 
      search: searchQuery, 
      page: 1 
    });
  }, [fetchRooms, filters.applied]);

  // Filter rooms
  const filterRooms = useCallback(async (filterParams) => {
    const newFilters = { ...filters.applied, ...filterParams, page: 1 };
    await fetchRooms(newFilters);
  }, [fetchRooms, filters.applied]);

  // Change page
  const changePage = useCallback(async (newPage) => {
    await fetchRooms({ ...filters.applied, page: newPage });
  }, [fetchRooms, filters.applied]);

  // Change page size
  const changePageSize = useCallback(async (newPageSize) => {
    await fetchRooms({ 
      ...filters.applied, 
      limit: newPageSize, 
      page: 1 
    });
  }, [fetchRooms, filters.applied]);

  // Sort rooms
  const sortRooms = useCallback(async (sortBy, sortOrder = 'asc') => {
    await fetchRooms({ 
      ...filters.applied, 
      sortBy, 
      sortOrder 
    });
  }, [fetchRooms, filters.applied]);

  // Create room
  const createRoom = useCallback(async (roomData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.createRoom(roomData);
      
      if (response.success) {
        // Refresh the list after creating
        await fetchRooms(filters.applied);
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'CREATE_ERROR',
        message: 'Failed to create room',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, [fetchRooms, filters.applied]);

  // Update room
  const updateRoom = useCallback(async (roomId, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.updateRoom(roomId, updateData);
      
      if (response.success) {
        // Update the room in the current list
        setRooms(prevRooms => 
          prevRooms.map(room => 
            room.id === roomId 
              ? { ...room, ...updateData }
              : room
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
        message: 'Failed to update room',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete room
  const deleteRoom = useCallback(async (roomId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.deleteRoom(roomId);
      
      if (response.success) {
        // Remove the room from the current list
        setRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
        
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
        message: 'Failed to delete room',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Bulk update rooms
  const bulkUpdateRooms = useCallback(async (roomIds, updateData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.bulkUpdateRooms(roomIds, updateData);
      
      if (response.success) {
        // Update the rooms in the current list
        setRooms(prevRooms => 
          prevRooms.map(room => 
            roomIds.includes(room.id) 
              ? { ...room, ...updateData }
              : room
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
        message: 'Failed to bulk update rooms',
        details: err.message
      };
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  }, []);

  // Bulk delete rooms
  const bulkDeleteRooms = useCallback(async (roomIds) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await hotelService.bulkDeleteRooms(roomIds);
      
      if (response.success) {
        // Remove the rooms from the current list
        setRooms(prevRooms => 
          prevRooms.filter(room => !roomIds.includes(room.id))
        );
        
        // Update pagination
        setPagination(prev => ({
          ...prev,
          totalItems: prev.totalItems - roomIds.length
        }));
        
        return response;
      } else {
        setError(response.error || { message: response.message });
        return response;
      }
    } catch (err) {
      const error = {
        code: 'BULK_DELETE_ERROR',
        message: 'Failed to bulk delete rooms',
        details: err.message
      };
      setError(error);
      return { success: false, error };
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
    fetchRooms(filters.applied);
  }, [fetchRooms, filters.applied]);

  // Initial load
  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return {
    // Data
    rooms,
    pagination,
    filters,
    loading,
    error,
    
    // Actions
    fetchRooms,
    searchRooms,
    filterRooms,
    changePage,
    changePageSize,
    sortRooms,
    createRoom,
    updateRoom,
    deleteRoom,
    bulkUpdateRooms,
    bulkDeleteRooms,
    clearError,
    refresh
  };
};

export default useHotelRooms;
