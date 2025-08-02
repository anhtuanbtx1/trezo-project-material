// Hotel Service - Mock API service for loading JSON data
import roomsData from '../data/hotel/rooms.json';
import roomDetailsData from '../data/hotel/room-details.json';

class HotelService {
  constructor() {
    this.baseDelay = 500; // Simulate network delay
  }

  // Simulate API delay
  delay(ms = this.baseDelay) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all rooms with filtering and pagination
  async getRooms(params = {}) {
    await this.delay();
    
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        status = '',
        bedType = '',
        hotelId = '',
        floor = '',
        minRate = 0,
        maxRate = 10000,
        sortBy = 'roomName',
        sortOrder = 'asc'
      } = params;

      let filteredRooms = [...roomsData.data.rooms];

      // Apply search filter
      if (search) {
        filteredRooms = filteredRooms.filter(room =>
          room.roomName.toLowerCase().includes(search.toLowerCase()) ||
          room.id.toLowerCase().includes(search.toLowerCase()) ||
          room.hotel.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply status filter
      if (status) {
        filteredRooms = filteredRooms.filter(room => room.status === status);
      }

      // Apply bed type filter
      if (bedType) {
        filteredRooms = filteredRooms.filter(room => room.bedType === bedType);
      }

      // Apply hotel filter
      if (hotelId) {
        filteredRooms = filteredRooms.filter(room => room.hotel.id === hotelId);
      }

      // Apply floor filter
      if (floor) {
        filteredRooms = filteredRooms.filter(room => room.floor === floor);
      }

      // Apply price range filter
      filteredRooms = filteredRooms.filter(room => 
        room.rate.amount >= minRate && room.rate.amount <= maxRate
      );

      // Apply sorting
      filteredRooms.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortBy) {
          case 'rate':
            aValue = a.rate.amount;
            bValue = b.rate.amount;
            break;
          case 'roomName':
            aValue = a.roomName.toLowerCase();
            bValue = b.roomName.toLowerCase();
            break;
          case 'hotel':
            aValue = a.hotel.name.toLowerCase();
            bValue = b.hotel.name.toLowerCase();
            break;
          case 'status':
            aValue = a.status.toLowerCase();
            bValue = b.status.toLowerCase();
            break;
          default:
            aValue = a.roomName.toLowerCase();
            bValue = b.roomName.toLowerCase();
        }

        if (sortOrder === 'desc') {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });

      // Apply pagination
      const totalItems = filteredRooms.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedRooms = filteredRooms.slice(startIndex, endIndex);

      return {
        success: true,
        message: "Rooms retrieved successfully",
        data: {
          rooms: paginatedRooms,
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
              status,
              bedType,
              hotelId,
              floor,
              priceRange: { min: minRate, max: maxRate }
            },
            available: roomsData.data.filters.available
          }
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve rooms",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get single room by ID
  async getRoomById(roomId) {
    await this.delay();

    try {
      const room = roomsData.data.rooms.find(r => r.id === roomId);

      if (!room) {
        return {
          success: false,
          message: "Room not found",
          error: {
            code: "ROOM_NOT_FOUND",
            details: `Room with ID ${roomId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      return {
        success: true,
        message: "Room details retrieved successfully",
        data: { room }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve room details",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get detailed room information by ID
  async getRoomDetails(roomId) {
    await this.delay();

    try {
      // For demo purposes, we'll use the detailed data for TRZ-32
      // In a real app, this would fetch specific room details from backend
      if (roomId === "TRZ-32") {
        return {
          success: true,
          message: "Room details retrieved successfully",
          data: roomDetailsData.data
        };
      }

      // For other rooms, return basic room info with extended details
      const room = roomsData.data.rooms.find(r => r.id === roomId);

      if (!room) {
        return {
          success: false,
          message: "Room not found",
          error: {
            code: "ROOM_NOT_FOUND",
            details: `Room with ID ${roomId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      // Create extended room details based on basic room data
      const extendedRoom = {
        ...roomDetailsData.data.room,
        id: room.id,
        roomName: room.roomName,
        hotel: room.hotel,
        bedType: room.bedType,
        floor: room.floor,
        facilities: room.facilities,
        rate: room.rate,
        status: room.status,
        images: room.images,
        capacity: room.capacity,
        roomSize: room.roomSize
      };

      return {
        success: true,
        message: "Room details retrieved successfully",
        data: {
          room: extendedRoom,
          relatedRooms: roomDetailsData.data.relatedRooms
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve room details",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Create new room
  async createRoom(roomData) {
    await this.delay();
    
    try {
      const newRoom = {
        id: `TRZ-${Date.now()}`,
        ...roomData,
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: "current-user",
          lastModifiedBy: "current-user"
        }
      };

      // In a real app, this would save to backend
      console.log('Creating room:', newRoom);

      return {
        success: true,
        message: "Room created successfully",
        data: { room: newRoom }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to create room",
        error: {
          code: "CREATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Update room
  async updateRoom(roomId, updateData) {
    await this.delay();
    
    try {
      const room = roomsData.data.rooms.find(r => r.id === roomId);
      
      if (!room) {
        return {
          success: false,
          message: "Room not found",
          error: {
            code: "ROOM_NOT_FOUND",
            details: `Room with ID ${roomId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      const updatedRoom = {
        ...room,
        ...updateData,
        metadata: {
          ...room.metadata,
          updatedAt: new Date().toISOString(),
          lastModifiedBy: "current-user"
        }
      };

      // In a real app, this would save to backend
      console.log('Updating room:', updatedRoom);

      return {
        success: true,
        message: "Room updated successfully",
        data: { room: updatedRoom }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to update room",
        error: {
          code: "UPDATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Delete room
  async deleteRoom(roomId) {
    await this.delay();
    
    try {
      const roomIndex = roomsData.data.rooms.findIndex(r => r.id === roomId);
      
      if (roomIndex === -1) {
        return {
          success: false,
          message: "Room not found",
          error: {
            code: "ROOM_NOT_FOUND",
            details: `Room with ID ${roomId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      // In a real app, this would delete from backend
      console.log('Deleting room:', roomId);

      return {
        success: true,
        message: "Room deleted successfully",
        data: { deletedRoomId: roomId }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to delete room",
        error: {
          code: "DELETE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Bulk operations
  async bulkUpdateRooms(roomIds, updateData) {
    await this.delay(800); // Longer delay for bulk operations
    
    try {
      const updatedRooms = roomIds.map(roomId => {
        const room = roomsData.data.rooms.find(r => r.id === roomId);
        if (room) {
          return {
            ...room,
            ...updateData,
            metadata: {
              ...room.metadata,
              updatedAt: new Date().toISOString(),
              lastModifiedBy: "current-user"
            }
          };
        }
        return null;
      }).filter(Boolean);

      console.log('Bulk updating rooms:', updatedRooms);

      return {
        success: true,
        message: `${updatedRooms.length} rooms updated successfully`,
        data: { updatedRooms }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to bulk update rooms",
        error: {
          code: "BULK_UPDATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  async bulkDeleteRooms(roomIds) {
    await this.delay(800);
    
    try {
      console.log('Bulk deleting rooms:', roomIds);

      return {
        success: true,
        message: `${roomIds.length} rooms deleted successfully`,
        data: { deletedRoomIds: roomIds }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to bulk delete rooms",
        error: {
          code: "BULK_DELETE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }
}

// Export singleton instance
export default new HotelService();
