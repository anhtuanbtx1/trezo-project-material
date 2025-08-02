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
  Divider,
  Rating,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useRoomDetails } from '../../hooks/useRoomDetails';

const RoomDetailsDemo = () => {
  const [selectedRoomId, setSelectedRoomId] = useState('TRZ-32');
  const {
    roomDetails,
    relatedRooms,
    loading,
    error,
    fetchRoomDetails,
    updateRoomDetails,
    addReview,
    addMaintenanceRecord,
    updateAvailability,
    updatePricing,
    addBookingToHistory,
    clearError,
    refresh
  } = useRoomDetails(selectedRoomId);

  // Available room IDs for testing
  const availableRoomIds = [
    'TRZ-32', 'TRZ-33', 'TRZ-34', 'TRZ-35', 'TRZ-36', 
    'TRZ-37', 'TRZ-38', 'TRZ-39', 'TRZ-40', 'TRZ-41'
  ];

  // Handle room selection change
  const handleRoomChange = (roomId) => {
    setSelectedRoomId(roomId);
  };

  // Test update room details
  const handleTestUpdate = async () => {
    if (!roomDetails) return;
    
    const result = await updateRoomDetails({
      status: roomDetails.status === 'Available' ? 'Not Available' : 'Available'
    });
    if (result.success) {
      alert('Room details updated successfully!');
    }
  };

  // Test add review
  const handleTestAddReview = async () => {
    if (!roomDetails) return;
    
    const newReview = {
      bookingId: `BK-${Date.now()}`,
      guestId: `GST-${Date.now()}`,
      guestName: "Test Reviewer",
      rating: 5,
      title: "Test Review",
      comment: `Test review added at ${new Date().toLocaleString()}. Great room with excellent amenities!`,
      categories: {
        cleanliness: 5,
        comfort: 5,
        location: 4,
        service: 5,
        value: 4
      }
    };

    const result = await addReview(newReview);
    if (result.success) {
      alert('Review added successfully!');
    }
  };

  // Test add maintenance
  const handleTestAddMaintenance = async () => {
    if (!roomDetails) return;
    
    const newMaintenance = {
      type: "maintenance",
      scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      notes: `Test maintenance scheduled at ${new Date().toLocaleString()}`,
      assignedTo: "Test Maintenance Team",
      estimatedDuration: "2 hours"
    };

    const result = await addMaintenanceRecord(newMaintenance);
    if (result.success) {
      alert('Maintenance record added successfully!');
    }
  };

  // Test update availability
  const handleTestUpdateAvailability = async () => {
    if (!roomDetails) return;
    
    const newAvailability = {
      isAvailable: !roomDetails.availability.isAvailable,
      blockedDates: [...(roomDetails.availability.blockedDates || []), new Date().toISOString().split('T')[0]]
    };

    const result = await updateAvailability(newAvailability);
    if (result.success) {
      alert('Room availability updated successfully!');
    }
  };

  // Test update pricing
  const handleTestUpdatePricing = async () => {
    if (!roomDetails) return;
    
    const newPricing = {
      baseRate: roomDetails.pricing.baseRate + 10,
      weekendRate: roomDetails.pricing.weekendRate + 15
    };

    const result = await updatePricing(newPricing);
    if (result.success) {
      alert('Room pricing updated successfully!');
    }
  };

  // Test add booking
  const handleTestAddBooking = async () => {
    if (!roomDetails) return;
    
    const newBooking = {
      guestId: `GST-${Date.now()}`,
      guestName: "Test Guest",
      checkIn: new Date().toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
      nights: 3,
      totalAmount: roomDetails.rate.amount * 3,
      status: "confirmed",
      specialRequests: ["Test booking"]
    };

    const result = await addBookingToHistory(newBooking);
    if (result.success) {
      alert('Booking added to history successfully!');
    }
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Hotel Room Details Demo
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

      {/* Room Selection */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Select Room to View Details
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Room ID</InputLabel>
              <Select
                value={selectedRoomId}
                label="Room ID"
                onChange={(e) => handleRoomChange(e.target.value)}
              >
                {availableRoomIds.map(roomId => (
                  <MenuItem key={roomId} value={roomId}>{roomId}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button 
              variant="outlined"
              onClick={refresh}
              disabled={loading}
              fullWidth
            >
              Refresh
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Action Buttons */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Test Actions
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="warning"
            onClick={handleTestUpdate}
            disabled={loading || !roomDetails}
          >
            Toggle Status
          </Button>
          <Button 
            variant="contained" 
            color="success"
            onClick={handleTestAddReview}
            disabled={loading || !roomDetails}
          >
            Add Review
          </Button>
          <Button 
            variant="contained" 
            color="info"
            onClick={handleTestAddMaintenance}
            disabled={loading || !roomDetails}
          >
            Add Maintenance
          </Button>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={handleTestUpdateAvailability}
            disabled={loading || !roomDetails}
          >
            Update Availability
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleTestUpdatePricing}
            disabled={loading || !roomDetails}
          >
            Update Pricing
          </Button>
          <Button 
            variant="contained" 
            color="success"
            onClick={handleTestAddBooking}
            disabled={loading || !roomDetails}
          >
            Add Booking
          </Button>
        </Box>
      </Paper>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Room Details Display */}
      {!loading && roomDetails && (
        <Grid container spacing={3}>
          {/* Basic Info */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {roomDetails.roomName}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ${roomDetails.rate.amount}/{roomDetails.rate.period}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2">
                      {roomDetails.hotel.name} - Floor {roomDetails.floor}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Room #{roomDetails.roomNumber} | {roomDetails.bedType}
                  </Typography>
                </Box>
                <Chip 
                  label={roomDetails.status}
                  color={roomDetails.status === 'Available' ? 'success' : 'error'}
                />
              </Box>
              
              <Typography variant="body1" paragraph>
                {roomDetails.description}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Typography variant="body2">
                  <strong>Capacity:</strong> {roomDetails.capacity.maxOccupancy} guests
                </Typography>
                <Typography variant="body2">
                  <strong>Size:</strong> {roomDetails.roomSize.area} {roomDetails.roomSize.unit}
                </Typography>
              </Box>

              {/* Amenities */}
              <Typography variant="h6" gutterBottom>
                Amenities
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {roomDetails.amenities?.slice(0, 6).map((amenity) => (
                  <Chip 
                    key={amenity.id}
                    label={amenity.name}
                    icon={amenity.icon === 'wifi' ? <WifiIcon /> : <AcUnitIcon />}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            </Card>

            {/* Detailed Sections */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Reviews ({roomDetails.reviews?.length || 0})</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {roomDetails.reviews?.slice(0, 3).map((review) => (
                  <Box key={review.id} sx={{ mb: 2, p: 2, border: '1px solid #eee', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ mr: 2, width: 32, height: 32 }}>
                        {review.guestName[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2">{review.guestName}</Typography>
                        <Rating value={review.rating} size="small" readOnly />
                      </Box>
                    </Box>
                    <Typography variant="body2">{review.comment}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Booking History ({roomDetails.bookingHistory?.length || 0})</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {roomDetails.bookingHistory?.slice(0, 5).map((booking) => (
                  <Box key={booking.bookingId} sx={{ mb: 1, p: 1, border: '1px solid #eee', borderRadius: 1 }}>
                    <Typography variant="subtitle2">{booking.guestName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {booking.checkIn} to {booking.checkOut} | ${booking.totalAmount}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Maintenance ({roomDetails.maintenance?.length || 0})</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {roomDetails.maintenance?.map((maintenance) => (
                  <Box key={maintenance.id} sx={{ mb: 1, p: 1, border: '1px solid #eee', borderRadius: 1 }}>
                    <Typography variant="subtitle2">{maintenance.type}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(maintenance.scheduledDate).toLocaleDateString()} | {maintenance.status}
                    </Typography>
                    <Typography variant="body2">{maintenance.notes}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Pricing Info */}
            <Card sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Pricing
              </Typography>
              <Typography variant="body2">
                Base Rate: ${roomDetails.pricing?.baseRate}/night
              </Typography>
              <Typography variant="body2">
                Weekend Rate: ${roomDetails.pricing?.weekendRate}/night
              </Typography>
              {roomDetails.pricing?.seasonalRates?.length > 0 && (
                <Typography variant="body2" color="text.secondary">
                  Seasonal rates available
                </Typography>
              )}
            </Card>

            {/* Availability */}
            <Card sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Availability
              </Typography>
              <Chip 
                label={roomDetails.availability?.isAvailable ? 'Available' : 'Not Available'}
                color={roomDetails.availability?.isAvailable ? 'success' : 'error'}
                sx={{ mb: 1 }}
              />
              {roomDetails.availability?.blockedDates?.length > 0 && (
                <Typography variant="body2" color="text.secondary">
                  {roomDetails.availability.blockedDates.length} blocked dates
                </Typography>
              )}
            </Card>

            {/* Hotel Info */}
            <Card sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Hotel Information
              </Typography>
              <Typography variant="body2" gutterBottom>
                {roomDetails.hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {roomDetails.hotel.address}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rating value={roomDetails.hotel.rating} size="small" readOnly />
                <Typography variant="body2">
                  {roomDetails.hotel.rating}
                </Typography>
              </Box>
            </Card>

            {/* Related Rooms */}
            {relatedRooms?.length > 0 && (
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Related Rooms
                </Typography>
                {relatedRooms.map((room) => (
                  <Box key={room.id} sx={{ mb: 1, p: 1, border: '1px solid #eee', borderRadius: 1 }}>
                    <Typography variant="subtitle2">{room.roomName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${room.rate}/night | {room.status}
                    </Typography>
                  </Box>
                ))}
              </Card>
            )}
          </Grid>
        </Grid>
      )}

      {!loading && !roomDetails && (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
          No room details found for ID: {selectedRoomId}
        </Typography>
      )}
    </Card>
  );
};

export default RoomDetailsDemo;
