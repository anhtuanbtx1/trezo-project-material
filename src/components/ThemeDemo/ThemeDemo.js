import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Box,
  Grid,
  Paper,
  Chip,
  Alert,
  Divider,
} from '@mui/material';
import { useThemeMode } from '../../hooks/useThemeMode';

const ThemeDemo = () => {
  const { 
    isDarkMode, 
    toggleTheme, 
    colors, 
    getCardStyles,
    getThemeClasses 
  } = useThemeMode();

  const themeClasses = getThemeClasses();

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ mb: 3, ...getCardStyles() }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            🌙 Dark Theme Demo
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            This demo showcases the comprehensive dark theme implementation. 
            Toggle between light and dark modes to see the seamless transition.
          </Typography>
          
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  color="primary"
                />
              }
              label={`Current Mode: ${isDarkMode ? 'Dark' : 'Light'}`}
            />
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Colors Demo */}
        <Grid item xs={12} md={6}>
          <Card sx={getCardStyles()}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Color Palette
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip label="Primary" sx={{ backgroundColor: colors.primary, color: 'white' }} />
                <Chip label="Secondary" sx={{ backgroundColor: colors.secondary, color: 'white' }} />
                <Chip label="Success" sx={{ backgroundColor: colors.success, color: 'white' }} />
                <Chip label="Warning" sx={{ backgroundColor: colors.warning, color: 'black' }} />
                <Chip label="Error" sx={{ backgroundColor: colors.error, color: 'white' }} />
                <Chip label="Info" sx={{ backgroundColor: colors.info, color: 'white' }} />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Background: {colors.background.default}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Paper: {colors.background.paper}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Border: {colors.border}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Components Demo */}
        <Grid item xs={12} md={6}>
          <Card sx={getCardStyles()}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Components
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Sample Input"
                  variant="outlined"
                  size="small"
                  placeholder="Type something..."
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small">
                    Contained
                  </Button>
                  <Button variant="outlined" size="small">
                    Outlined
                  </Button>
                  <Button variant="text" size="small">
                    Text
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Typography Demo */}
        <Grid item xs={12} md={6}>
          <Card sx={getCardStyles()}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Typography
              </Typography>
              <Typography variant="h1" sx={{ fontSize: '2rem', mb: 1 }}>
                Heading 1
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 1 }}>
                Heading 2
              </Typography>
              <Typography variant="body1" gutterBottom>
                This is body text that adapts to the current theme mode.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is secondary text with appropriate contrast.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Alerts Demo */}
        <Grid item xs={12} md={6}>
          <Card sx={getCardStyles()}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Alerts & Feedback
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Alert severity="success" size="small">
                  Success alert in {isDarkMode ? 'dark' : 'light'} mode
                </Alert>
                <Alert severity="warning" size="small">
                  Warning alert adapts to theme
                </Alert>
                <Alert severity="error" size="small">
                  Error alert with proper contrast
                </Alert>
                <Alert severity="info" size="small">
                  Info alert themed appropriately
                </Alert>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Theme Info */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, backgroundColor: colors.background.paper }}>
            <Typography variant="h6" gutterBottom>
              Theme Information
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2">Current Mode</Typography>
                <Typography variant="body2" color="text.secondary">
                  {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2">Primary Color</Typography>
                <Typography variant="body2" color="text.secondary">
                  {colors.primary}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2">Background</Typography>
                <Typography variant="body2" color="text.secondary">
                  {colors.background.default}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2">Text Color</Typography>
                <Typography variant="body2" color="text.secondary">
                  {colors.text.primary}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeDemo;
