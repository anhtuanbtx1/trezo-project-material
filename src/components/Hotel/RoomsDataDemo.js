import React, { useState } from 'react';
import {
  Card,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Alert,
  CircularProgress,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider
} from '@mui/material';
import { useHotelRooms } from '../../hooks/useHotelRooms';

const RoomsDataDemo = () => {
  const {
    rooms,
    pagination,
    filters,
    loading,
    error,
    searchRooms,
    filterRooms,
    changePage,
    changePageSize,
    sortRooms,
    createRoom,
    updateRoom,
    deleteRoom,
    clearError,
    refresh
  } = useHotelRooms();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedBedType, setSelectedBedType] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');
  const [sortBy, setSortBy] = useState('roomName');
  const [sortOrder, setSortOrder] = useState('asc');

  // Handle search
  const handleSearch = () => {
    searchRooms(searchQuery);
  };

  // Handle filter
  const handleFilter = () => {
    filterRooms({
      status: selectedStatus,
      bedType: selectedBedType,
      hotelId: selectedHotel
    });
  };

  // Handle sort
  const handleSort = () => {
    sortRooms(sortBy, sortOrder);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatus('');
    setSelectedBedType('');
    setSelectedHotel('');
    setSortBy('roomName');
    setSortOrder('asc');
    filterRooms({});
  };

  // Test create room
  const handleTestCreate = async () => {
    const newRoomData = {
      roomName: `Test Room ${Date.now()}`,
      hotel: {
        id: "hotel-001",
        name: "Elysian Grand",
        address: "123 Luxury Street, City Center"
      },
      bedType: "King Bed",
      floor: "Test Floor",
      facilities: ["Wi-Fi", "AC", "TV"],
      rate: {
        amount: 200,
        currency: "USD",
        period: "night"
      },
      status: "Available",
      images: [{
        id: "test-img",
        url: "/images/rooms/room1.jpg",
        alt: "Test room",
        isPrimary: true
      }],
      capacity: {
        adults: 2,
        children: 1,
        maxOccupancy: 3
      },
      roomSize: {
        area: 40,
        unit: "sqm"
      }
    };

    const result = await createRoom(newRoomData);
    if (result.success) {
      alert('Room created successfully!');
    }
  };

  // Test update room
  const handleTestUpdate = async () => {
    if (rooms.length > 0) {
      const roomToUpdate = rooms[0];
      const result = await updateRoom(roomToUpdate.id, {
        status: roomToUpdate.status === 'Available' ? 'Not Available' : 'Available'
      });
      if (result.success) {
        alert('Room updated successfully!');
      }
    }
  };

  // Test delete room
  const handleTestDelete = async () => {
    if (rooms.length > 0) {
      const roomToDelete = rooms[rooms.length - 1];
      if (window.confirm(`Delete room ${roomToDelete.roomName}?`)) {
        const result = await deleteRoom(roomToDelete.id);
        if (result.success) {
          alert('Room deleted successfully!');
        }
      }
    }
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Hotel Rooms Data Demo
      </Typography>
      
      {error && (
        <Alert 
          severity="error" 
          onClose={clearError}
          sx={{ mb: 2 }}
        >
          {error.message || 'An error occurred'}
        </Alert>
      )}

      {/* Controls */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Controls & Filters
        </Typography>
        
        <Grid container spacing={2} alignItems="center">
          {/* Search */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Button 
              variant="contained" 
              onClick={handleSearch}
              disabled={loading}
              fullWidth
            >
              Search
            </Button>
          </Grid>

          {/* Status Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={selectedStatus}
                label="Status"
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {filters.available.statuses?.map(status => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Bed Type Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Bed Type</InputLabel>
              <Select
                value={selectedBedType}
                label="Bed Type"
                onChange={(e) => setSelectedBedType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {filters.available.bedTypes?.map(bedType => (
                  <MenuItem key={bedType} value={bedType}>{bedType}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Hotel Filter */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Hotel</InputLabel>
              <Select
                value={selectedHotel}
                label="Hotel"
                onChange={(e) => setSelectedHotel(e.target.value)}
              >
                <MenuItem value="">All Hotels</MenuItem>
                {filters.available.hotels?.map(hotel => (
                  <MenuItem key={hotel.id} value={hotel.id}>{hotel.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Filter Button */}
          <Grid item xs={12} sm={6} md={2}>
            <Button 
              variant="outlined" 
              onClick={handleFilter}
              disabled={loading}
              fullWidth
            >
              Apply Filters
            </Button>
          </Grid>

          {/* Sort Controls */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="roomName">Room Name</MenuItem>
                <MenuItem value="rate">Rate</MenuItem>
                <MenuItem value="hotel">Hotel</MenuItem>
                <MenuItem value="status">Status</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Order</InputLabel>
              <Select
                value={sortOrder}
                label="Order"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Button 
              variant="outlined" 
              onClick={handleSort}
              disabled={loading}
              fullWidth
            >
              Sort
            </Button>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="success"
                onClick={handleTestCreate}
                disabled={loading}
              >
                Test Create
              </Button>
              <Button 
                variant="contained" 
                color="warning"
                onClick={handleTestUpdate}
                disabled={loading || rooms.length === 0}
              >
                Test Update
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={handleTestDelete}
                disabled={loading || rooms.length === 0}
              >
                Test Delete
              </Button>
              <Button 
                variant="outlined"
                onClick={handleClearFilters}
                disabled={loading}
              >
                Clear Filters
              </Button>
              <Button 
                variant="outlined"
                onClick={refresh}
                disabled={loading}
              >
                Refresh
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Data Display */}
      {!loading && (
        <>
          {/* Stats */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Showing {rooms.length} of {pagination.totalItems} rooms 
              (Page {pagination.currentPage} of {pagination.totalPages})
            </Typography>
          </Box>

          {/* Pagination Controls */}
          <Box sx={{ mb: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button 
              size="small"
              onClick={() => changePage(pagination.currentPage - 1)}
              disabled={!pagination.hasPreviousPage}
            >
              Previous
            </Button>
            <Typography variant="body2">
              Page {pagination.currentPage}
            </Typography>
            <Button 
              size="small"
              onClick={() => changePage(pagination.currentPage + 1)}
              disabled={!pagination.hasNextPage}
            </Button>
            <FormControl size="small" sx={{ ml: 2, minWidth: 100 }}>
              <InputLabel>Per Page</InputLabel>
              <Select
                value={pagination.itemsPerPage}
                label="Per Page"
                onChange={(e) => changePageSize(e.target.value)}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Rooms List */}
          <Grid container spacing={2}>
            {rooms.map((room) => (
              <Grid item xs={12} sm={6} md={4} key={room.id}>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    {room.roomName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {room.hotel.name} - {room.floor}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {room.bedType}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ${room.rate.amount}/{room.rate.period}
                  </Typography>
                  <Chip 
                    label={room.status}
                    color={room.status === 'Available' ? 'success' : 'error'}
                    size="small"
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ID: {room.id}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {rooms.length === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No rooms found
            </Typography>
          )}
        </>
      )}
    </Card>
  );
};

export default RoomsDataDemo;
