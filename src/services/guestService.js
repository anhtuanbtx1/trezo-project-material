// Guest Service - Mock API service for loading guest JSON data
import guestsData from '../data/hotel/guests.json';

class GuestService {
  constructor() {
    this.baseDelay = 500; // Simulate network delay
  }

  // Simulate API delay
  delay(ms = this.baseDelay) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all guests with filtering and pagination
  async getGuests(params = {}) {
    await this.delay();
    
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        status = '',
        membershipType = '',
        nationality = '',
        currentlyStaying = null,
        dateRange = { start: null, end: null },
        sortBy = 'fullName',
        sortOrder = 'asc'
      } = params;

      let filteredGuests = [...guestsData.data.guests];

      // Apply search filter
      if (search) {
        filteredGuests = filteredGuests.filter(guest =>
          guest.personalInfo.fullName.toLowerCase().includes(search.toLowerCase()) ||
          guest.guestCode.toLowerCase().includes(search.toLowerCase()) ||
          guest.personalInfo.email.toLowerCase().includes(search.toLowerCase()) ||
          guest.personalInfo.phone.includes(search)
        );
      }

      // Apply status filter
      if (status) {
        filteredGuests = filteredGuests.filter(guest => guest.status === status);
      }

      // Apply membership type filter
      if (membershipType) {
        filteredGuests = filteredGuests.filter(guest => 
          guest.membershipInfo.membershipType === membershipType
        );
      }

      // Apply nationality filter
      if (nationality) {
        filteredGuests = filteredGuests.filter(guest => 
          guest.personalInfo.nationality === nationality
        );
      }

      // Apply currently staying filter
      if (currentlyStaying !== null) {
        filteredGuests = filteredGuests.filter(guest => 
          guest.currentStay.isCurrentlyStaying === currentlyStaying
        );
      }

      // Apply date range filter (last visit)
      if (dateRange.start && dateRange.end) {
        filteredGuests = filteredGuests.filter(guest => {
          const lastVisit = new Date(guest.metadata.lastVisit);
          const startDate = new Date(dateRange.start);
          const endDate = new Date(dateRange.end);
          return lastVisit >= startDate && lastVisit <= endDate;
        });
      }

      // Apply sorting
      filteredGuests.sort((a, b) => {
        let aValue, bValue;
        
        switch (sortBy) {
          case 'fullName':
            aValue = a.personalInfo.fullName.toLowerCase();
            bValue = b.personalInfo.fullName.toLowerCase();
            break;
          case 'membershipType':
            aValue = a.membershipInfo.membershipType.toLowerCase();
            bValue = b.membershipInfo.membershipType.toLowerCase();
            break;
          case 'totalSpent':
            aValue = a.financialInfo.totalSpent;
            bValue = b.financialInfo.totalSpent;
            break;
          case 'lastVisit':
            aValue = new Date(a.metadata.lastVisit);
            bValue = new Date(b.metadata.lastVisit);
            break;
          case 'totalVisits':
            aValue = a.metadata.totalVisits;
            bValue = b.metadata.totalVisits;
            break;
          default:
            aValue = a.personalInfo.fullName.toLowerCase();
            bValue = b.personalInfo.fullName.toLowerCase();
        }

        if (sortOrder === 'desc') {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });

      // Apply pagination
      const totalItems = filteredGuests.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedGuests = filteredGuests.slice(startIndex, endIndex);

      return {
        success: true,
        message: "Guests retrieved successfully",
        data: {
          guests: paginatedGuests,
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
              membershipType,
              nationality,
              currentlyStaying,
              dateRange
            },
            available: guestsData.data.filters.available
          },
          statistics: guestsData.data.statistics
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve guests",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get single guest by ID
  async getGuestById(guestId) {
    await this.delay();
    
    try {
      const guest = guestsData.data.guests.find(g => g.id === guestId);
      
      if (!guest) {
        return {
          success: false,
          message: "Guest not found",
          error: {
            code: "GUEST_NOT_FOUND",
            details: `Guest with ID ${guestId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      return {
        success: true,
        message: "Guest details retrieved successfully",
        data: { guest }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve guest details",
        error: {
          code: "FETCH_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Create new guest
  async createGuest(guestData) {
    await this.delay();
    
    try {
      const newGuest = {
        id: `GST-${Date.now()}`,
        guestCode: `TRZ-G-${Date.now()}`,
        ...guestData,
        bookingHistory: [],
        currentStay: {
          isCurrentlyStaying: false,
          bookingId: null,
          roomId: null,
          checkIn: null,
          checkOut: null
        },
        financialInfo: {
          totalSpent: 0,
          averageSpendPerNight: 0,
          paymentMethods: [],
          outstandingBalance: 0
        },
        notes: [],
        status: "Active",
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastVisit: null,
          totalVisits: 0,
          createdBy: "current-user",
          lastModifiedBy: "current-user"
        }
      };

      console.log('Creating guest:', newGuest);

      return {
        success: true,
        message: "Guest created successfully",
        data: { guest: newGuest }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to create guest",
        error: {
          code: "CREATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Update guest
  async updateGuest(guestId, updateData) {
    await this.delay();
    
    try {
      const guest = guestsData.data.guests.find(g => g.id === guestId);
      
      if (!guest) {
        return {
          success: false,
          message: "Guest not found",
          error: {
            code: "GUEST_NOT_FOUND",
            details: `Guest with ID ${guestId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      const updatedGuest = {
        ...guest,
        ...updateData,
        metadata: {
          ...guest.metadata,
          updatedAt: new Date().toISOString(),
          lastModifiedBy: "current-user"
        }
      };

      console.log('Updating guest:', updatedGuest);

      return {
        success: true,
        message: "Guest updated successfully",
        data: { guest: updatedGuest }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to update guest",
        error: {
          code: "UPDATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Delete guest
  async deleteGuest(guestId) {
    await this.delay();
    
    try {
      const guestIndex = guestsData.data.guests.findIndex(g => g.id === guestId);
      
      if (guestIndex === -1) {
        return {
          success: false,
          message: "Guest not found",
          error: {
            code: "GUEST_NOT_FOUND",
            details: `Guest with ID ${guestId} does not exist`,
            timestamp: new Date().toISOString()
          }
        };
      }

      console.log('Deleting guest:', guestId);

      return {
        success: true,
        message: "Guest deleted successfully",
        data: { deletedGuestId: guestId }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to delete guest",
        error: {
          code: "DELETE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Add note to guest
  async addGuestNote(guestId, noteData) {
    await this.delay();
    
    try {
      const newNote = {
        id: `note-${Date.now()}`,
        date: new Date().toISOString(),
        author: "current-user",
        ...noteData
      };

      console.log('Adding note to guest:', guestId, newNote);

      return {
        success: true,
        message: "Note added successfully",
        data: { note: newNote }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to add note",
        error: {
          code: "ADD_NOTE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Get guest statistics
  async getGuestStatistics() {
    await this.delay();
    
    try {
      return {
        success: true,
        message: "Guest statistics retrieved successfully",
        data: {
          statistics: guestsData.data.statistics
        }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to retrieve guest statistics",
        error: {
          code: "STATS_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  // Bulk operations
  async bulkUpdateGuests(guestIds, updateData) {
    await this.delay(800);
    
    try {
      console.log('Bulk updating guests:', guestIds, updateData);

      return {
        success: true,
        message: `${guestIds.length} guests updated successfully`,
        data: { updatedGuestIds: guestIds }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to bulk update guests",
        error: {
          code: "BULK_UPDATE_ERROR",
          details: error.message,
          timestamp: new Date().toISOString()
        }
      };
    }
  }

  async bulkDeleteGuests(guestIds) {
    await this.delay(800);
    
    try {
      console.log('Bulk deleting guests:', guestIds);

      return {
        success: true,
        message: `${guestIds.length} guests deleted successfully`,
        data: { deletedGuestIds: guestIds }
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to bulk delete guests",
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
export default new GuestService();
