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
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import PhotoIcon from '@mui/icons-material/Photo';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useReviews } from '../../hooks/useReviews';

const ReviewsDemo = () => {
  const {
    reviews,
    pagination,
    filters,
    statistics,
    loading,
    error,
    searchReviews,
    filterReviews,
    changePage,
    changePageSize,
    sortReviews,
    createReview,
    updateReview,
    deleteReview,
    addReviewResponse,
    voteReviewHelpful,
    clearError,
    refresh
  } = useReviews();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');
  const [selectedGuestType, setSelectedGuestType] = useState('');
  const [verifiedFilter, setVerifiedFilter] = useState('');
  const [photosFilter, setPhotosFilter] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Dialog states
  const [responseDialog, setResponseDialog] = useState({ open: false, reviewId: null });
  const [responseText, setResponseText] = useState('');

  // Handle search
  const handleSearch = () => {
    searchReviews(searchQuery);
  };

  // Handle filter
  const handleFilter = () => {
    filterReviews({
      rating: selectedRating === '' ? null : parseInt(selectedRating),
      hotelId: selectedHotel,
      guestType: selectedGuestType,
      verified: verifiedFilter === '' ? null : verifiedFilter === 'true',
      hasPhotos: photosFilter === '' ? null : photosFilter === 'true'
    });
  };

  // Handle sort
  const handleSort = () => {
    sortReviews(sortBy, sortOrder);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedRating('');
    setSelectedHotel('');
    setSelectedGuestType('');
    setVerifiedFilter('');
    setPhotosFilter('');
    setSortBy('date');
    setSortOrder('desc');
    filterReviews({});
  };

  // Test create review
  const handleTestCreate = async () => {
    const newReviewData = {
      bookingId: `BK-${Date.now()}`,
      roomId: "TRZ-32",
      roomName: "Test Room",
      guest: {
        id: `GST-${Date.now()}`,
        name: "Test Reviewer",
        email: "test@email.com",
        membershipType: "Gold",
        avatar: "/images/guests/default.jpg",
        isVerified: true
      },
      hotel: {
        id: "hotel-001",
        name: "Test Hotel"
      },
      rating: {
        overall: 5,
        categories: {
          cleanliness: 5,
          comfort: 5,
          location: 4,
          service: 5,
          value: 4,
          amenities: 5
        }
      },
      title: "Test Review",
      comment: `Test review created at ${new Date().toLocaleString()}. This is a sample review to test the system functionality.`,
      pros: ["Great service", "Clean room", "Good location"],
      cons: ["Minor issues"],
      stayDetails: {
        checkIn: "2024-08-01",
        checkOut: "2024-08-03",
        nights: 2,
        purpose: "Leisure",
        groupType: "Couple"
      },
      photos: []
    };

    const result = await createReview(newReviewData);
    if (result.success) {
      alert('Review created successfully!');
    }
  };

  // Test update review
  const handleTestUpdate = async () => {
    if (reviews.length > 0) {
      const reviewToUpdate = reviews[0];
      const result = await updateReview(reviewToUpdate.id, {
        title: `Updated: ${reviewToUpdate.title}`,
        comment: `${reviewToUpdate.comment} [Updated at ${new Date().toLocaleString()}]`
      });
      if (result.success) {
        alert('Review updated successfully!');
      }
    }
  };

  // Test delete review
  const handleTestDelete = async () => {
    if (reviews.length > 0) {
      const reviewToDelete = reviews[reviews.length - 1];
      if (window.confirm(`Delete review by ${reviewToDelete.guest.name}?`)) {
        const result = await deleteReview(reviewToDelete.id);
        if (result.success) {
          alert('Review deleted successfully!');
        }
      }
    }
  };

  // Handle vote helpful
  const handleVoteHelpful = async (reviewId) => {
    const result = await voteReviewHelpful(reviewId, true);
    if (result.success) {
      // Visual feedback handled by the hook
    }
  };

  // Handle add response
  const handleAddResponse = async () => {
    if (!responseText.trim()) return;
    
    const result = await addReviewResponse(responseDialog.reviewId, {
      author: "Hotel Manager",
      authorRole: "Management",
      content: responseText
    });
    
    if (result.success) {
      setResponseDialog({ open: false, reviewId: null });
      setResponseText('');
      alert('Response added successfully!');
    }
  };

  // Open response dialog
  const openResponseDialog = (reviewId) => {
    setResponseDialog({ open: true, reviewId });
    setResponseText('');
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Hotel Reviews Data Demo
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
            Review Statistics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Total Reviews</Typography>
              <Typography variant="h6">{statistics.totalReviews}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Average Rating</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6">{statistics.averageRating}</Typography>
                <Rating value={statistics.averageRating} size="small" readOnly />
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Response Rate</Typography>
              <Typography variant="h6">{Math.round(statistics.responseRate * 100)}%</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" color="text.secondary">Recommendation Rate</Typography>
              <Typography variant="h6">{Math.round(statistics.recommendationRate * 100)}%</Typography>
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
              placeholder="Title, comment, guest..."
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

          {/* Rating Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Rating</InputLabel>
              <Select
                value={selectedRating}
                label="Rating"
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {[5, 4, 3, 2, 1].map(rating => (
                  <MenuItem key={rating} value={rating}>{rating} Stars</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Hotel Filter */}
          <Grid item xs={12} sm={6} md={2}>
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

          {/* Guest Type Filter */}
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Guest Type</InputLabel>
              <Select
                value={selectedGuestType}
                label="Guest Type"
                onChange={(e) => setSelectedGuestType(e.target.value)}
              >
                <MenuItem value="">All Types</MenuItem>
                {filters.available.guestTypes?.map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Verified Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Verified</InputLabel>
              <Select
                value={verifiedFilter}
                label="Verified"
                onChange={(e) => setVerifiedFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">Verified</MenuItem>
                <MenuItem value="false">Not Verified</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Photos Filter */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Has Photos</InputLabel>
              <Select
                value={photosFilter}
                label="Has Photos"
                onChange={(e) => setPhotosFilter(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="true">With Photos</MenuItem>
                <MenuItem value="false">No Photos</MenuItem>
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
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="helpful">Helpful Votes</MenuItem>
                <MenuItem value="guestName">Guest Name</MenuItem>
                <MenuItem value="roomName">Room Name</MenuItem>
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
                <MenuItem value="desc">Newest First</MenuItem>
                <MenuItem value="asc">Oldest First</MenuItem>
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
                disabled={loading || reviews.length === 0}
              >
                Test Update
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={handleTestDelete}
                disabled={loading || reviews.length === 0}
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
              Showing {reviews.length} of {pagination.totalItems} reviews 
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

          {/* Reviews List */}
          <Grid container spacing={2}>
            {reviews.map((review) => (
              <Grid item xs={12} key={review.id}>
                <Card sx={{ p: 3 }}>
                  {/* Review Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={review.guest.avatar}>
                        {review.guest.name[0]}
                      </Avatar>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1">{review.guest.name}</Typography>
                          {review.guest.isVerified && (
                            <VerifiedIcon color="primary" fontSize="small" />
                          )}
                          <Chip 
                            label={review.guest.membershipType}
                            size="small"
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {review.roomName} | {new Date(review.metadata.createdAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={review.rating.overall} readOnly />
                  </Box>

                  {/* Review Content */}
                  <Typography variant="h6" gutterBottom>
                    {review.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {review.comment}
                  </Typography>

                  {/* Pros and Cons */}
                  {(review.pros?.length > 0 || review.cons?.length > 0) && (
                    <Box sx={{ mb: 2 }}>
                      {review.pros?.length > 0 && (
                        <Box sx={{ mb: 1 }}>
                          <Typography variant="body2" color="success.main" gutterBottom>
                            <strong>Pros:</strong>
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {review.pros.map((pro, index) => (
                              <Chip key={index} label={pro} size="small" color="success" variant="outlined" />
                            ))}
                          </Box>
                        </Box>
                      )}
                      {review.cons?.length > 0 && (
                        <Box>
                          <Typography variant="body2" color="error.main" gutterBottom>
                            <strong>Cons:</strong>
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {review.cons.map((con, index) => (
                              <Chip key={index} label={con} size="small" color="error" variant="outlined" />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                  )}

                  {/* Photos */}
                  {review.photos?.length > 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <PhotoIcon fontSize="small" />
                      <Typography variant="body2">
                        {review.photos.length} photo(s)
                      </Typography>
                    </Box>
                  )}

                  {/* Actions */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleVoteHelpful(review.id)}
                      >
                        <ThumbUpIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" sx={{ alignSelf: 'center' }}>
                        {review.helpfulVotes} helpful
                      </Typography>
                      <IconButton 
                        size="small"
                        onClick={() => openResponseDialog(review.id)}
                      >
                        <ReplyIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Chip 
                      label={review.isRecommended ? 'Recommended' : 'Not Recommended'}
                      color={review.isRecommended ? 'success' : 'default'}
                      size="small"
                    />
                  </Box>

                  {/* Management Response */}
                  {review.response && (
                    <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Response from {review.response.author}
                      </Typography>
                      <Typography variant="body2">
                        {review.response.content}
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>

          {reviews.length === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No reviews found
            </Typography>
          )}
        </>
      )}

      {/* Response Dialog */}
      <Dialog 
        open={responseDialog.open} 
        onClose={() => setResponseDialog({ open: false, reviewId: null })}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add Response to Review</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Response"
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="Enter your response to this review..."
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResponseDialog({ open: false, reviewId: null })}>
            Cancel
          </Button>
          <Button 
            onClick={handleAddResponse}
            variant="contained"
            disabled={!responseText.trim()}
          >
            Add Response
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ReviewsDemo;
