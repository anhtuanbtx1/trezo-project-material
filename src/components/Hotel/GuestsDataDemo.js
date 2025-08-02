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
  Avatar,
  Switch,
  FormControlLabel
} from '@mui/material';
import { useGuests } from '../../hooks/useGuests';

const GuestsDataDemo = () => {
  const {
    guests,
    pagination,
    filters,
    statistics,
    loading,
    error,
    searchGuests,
    filterGuests,
    changePage,
    changePageSize,
    sortGuests,
    createGuest,
    updateGuest,
    deleteGuest,
    addGuestNote,
    clearError,
    refresh
  } = useGuests();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedMembership, setSelectedMembership] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [currentlyStayingFilter, setCurrentlyStayingFilter] = useState('');
  const [sortBy, setSortBy] = useState('fullName');
  const [sortOrder, setSortOrder] = useState('asc');

  // Handle search
  const handleSearch = () => {
    searchGuests(searchQuery);
  };

  // Handle filter
  const handleFilter = () => {
    filterGuests({
      status: selectedStatus,
      membershipType: selectedMembership,
      nationality: selectedNationality,
      currentlyStaying: currentlyStayingFilter === '' ? null : currentlyStayingFilter === 'true'
    });
  };

  // Handle sort
  const handleSort = () => {
    sortGuests(sortBy, sortOrder);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatus('');
    setSelectedMembership('');
    setSelectedNationality('');
    setCurrentlyStayingFilter('');
    setSortBy('fullName');
    setSortOrder('asc');
    filterGuests({});
  };

  // Test create guest
  const handleTestCreate = async () => {
    const newGuestData = {
      personalInfo: {
        firstName: "Test",
        lastName: "Guest",
        fullName: "Test Guest",
        email: `test.guest.${Date.now()}@email.com`,
        phone: "+1-555-9999",
        dateOfBirth: "1990-01-01",
        nationality: "American",
        gender: "Male",
        idType: "Passport",
        idNumber: `P${Date.now()}`,
        address: {
          street: "123 Test Street",
          city: "Test City",
          state: "TS",
          zipCode: "12345",
          country: "USA"
        }
      },
      avatar: "/images/guests/default.jpg",
      membershipInfo: {
        membershipType: "Bronze",
        memberSince: new Date().toISOString(),
        loyaltyPoints: 0,
        membershipBenefits: ["Free Wi-Fi"]
      },
      contactPreferences: {
        preferredLanguage: "English",
        communicationMethod: "Email",
        marketingOptIn: true,
        smsOptIn: false
      },
      emergencyContact: {
        name: "Emergency Contact",
        relationship: "Friend",
        phone: "+1-555-8888",
        email: "emergency@email.com"
      },
      preferences: {
        roomType: "Standard",
        bedType: "Double Bed",
        floor: "Any",
        smokingPreference: "Non-Smoking",
        specialRequests: [],
        dietaryRestrictions: [],
        accessibility: []
      }
    };

    const result = await createGuest(newGuestData);
    if (result.success) {
      alert('Guest created successfully!');
    }
  };

  // Test update guest
  const handleTestUpdate = async () => {
    if (guests.length > 0) {
      const guestToUpdate = guests[0];
      const result = await updateGuest(guestToUpdate.id, {
        status: guestToUpdate.status === 'Active' ? 'VIP' : 'Active'
      });
      if (result.success) {
        alert('Guest updated successfully!');
      }
    }
  };

  // Test delete guest
  const handleTestDelete = async () => {
    if (guests.length > 0) {
      const guestToDelete = guests[guests.length - 1];
      if (window.confirm(`Delete guest ${guestToDelete.personalInfo.fullName}?`)) {
        const result = await deleteGuest(guestToDelete.id);
        if (result.success) {
          alert('Guest deleted successfully!');
        }
      }
    }
  };

  // Test add note
  const handleTestAddNote = async () => {
    if (guests.length > 0) {
      const guest = guests[0];
      const result = await addGuestNote(guest.id, {
        content: `Test note added at ${new Date().toLocaleString()}`,
        type: "General"
      });
      if (result.success) {
        alert('Note added successfully!');
      }
    }
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Hotel Guests Data Demo
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

      {/* Statistics */}
      {statistics && Object.keys(statistics).length > 0 && (
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Guest Statistics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Total Guests</Typography>
              <Typography variant="h6">{statistics.totalGuests}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Currently Staying</Typography>
              <Typography variant="h6">{statistics.currentlyStaying}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">VIP Guests</Typography>
              <Typography variant="h6">{statistics.vipGuests}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Avg Spend</Typography>
              <Typography variant="h6">${statistics.averageSpendPerGuest}</Typography>
            </Grid>
          </Grid>
        </Paper>
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
              placeholder="Name, email, phone..."
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

          {/* Membership Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Membership</InputLabel>
              <Select
                value={selectedMembership}
                label="Membership"
                onChange={(e) => setSelectedMembership(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {filters.available.membershipTypes?.map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Nationality Filter */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Nationality</InputLabel>
              <Select
                value={selectedNationality}
                label="Nationality"
                onChange={(e) => setSelectedNationality(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {filters.available.nationalities?.map(nationality => (
                  <MenuItem key={nationality} value={nationality}>{nationality}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Currently Staying Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Currently Staying</InputLabel>
              <Select
                value={currentlyStayingFilter}
                label="Currently Staying"
                onChange={(e) => setCurrentlyStayingFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
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
                <MenuItem value="fullName">Name</MenuItem>
                <MenuItem value="membershipType">Membership</MenuItem>
                <MenuItem value="totalSpent">Total Spent</MenuItem>
                <MenuItem value="lastVisit">Last Visit</MenuItem>
                <MenuItem value="totalVisits">Total Visits</MenuItem>
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
                disabled={loading || guests.length === 0}
              >
                Test Update
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={handleTestDelete}
                disabled={loading || guests.length === 0}
              >
                Test Delete
              </Button>
              <Button 
                variant="contained" 
                color="info"
                onClick={handleTestAddNote}
                disabled={loading || guests.length === 0}
              >
                Test Add Note
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
              Showing {guests.length} of {pagination.totalItems} guests 
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
            >
              Next
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

          {/* Guests List */}
          <Grid container spacing={2}>
            {guests.map((guest) => (
              <Grid item xs={12} sm={6} md={4} key={guest.id}>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={guest.avatar} 
                      sx={{ mr: 2, width: 50, height: 50 }}
                    >
                      {guest.personalInfo.firstName[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">
                        {guest.personalInfo.fullName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {guest.guestCode}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" gutterBottom>
                    {guest.personalInfo.email}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {guest.personalInfo.phone}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Chip 
                      label={guest.membershipInfo.membershipType}
                      color="primary"
                      size="small"
                    />
                    <Chip 
                      label={guest.status}
                      color={guest.status === 'VIP' ? 'warning' : 'success'}
                      size="small"
                    />
                  </Box>
                  
                  {guest.currentStay.isCurrentlyStaying && (
                    <Chip 
                      label="Currently Staying"
                      color="info"
                      size="small"
                      sx={{ mb: 1 }}
                    />
                  )}
                  
                  <Typography variant="body2" color="text.secondary">
                    Total Spent: ${guest.financialInfo.totalSpent}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visits: {guest.metadata.totalVisits}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last Visit: {guest.metadata.lastVisit ? new Date(guest.metadata.lastVisit).toLocaleDateString() : 'Never'}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {guests.length === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No guests found
            </Typography>
          )}
        </>
      )}
    </Card>
  );
};

export default GuestsDataDemo;
