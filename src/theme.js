import { createTheme } from "@mui/material/styles";

// Import Google Font
const interFontFamily = "'Inter', sans-serif";

// Create theme function that accepts mode parameter
export const createAppTheme = (mode = 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode: mode,
      background: {
        default: isDark ? "#0a0e19" : "#F6F7F9",
        paper: isDark ? "#0c1427" : "#ffffff",
      },
      text: {
        primary: isDark ? "#ffffff" : "#3A4252",
        secondary: isDark ? "#8695AA" : "#64748B",
      },
      primary: {
        main: "#605DFF",
        50: "#ECF0FF",
        100: "#DDE4FF",
        400: "#757dff",
        500: "#605DFF",
        600: "#1f64f1",
        700: "#3e2ad8",
        800: "#3325ae",
      },
      secondary: {
        main: "#3584FC",
        100: "#DAEBFF",
        400: "#3584fc",
        500: "#3584fc",
      },
      success: {
        main: "#25B003",
        50: "#EEFFE5",
        100: "#D8FFC8",
        300: "#82fc5a",
        400: "#37d80a",
        500: "#37d80a",
        600: "#25b003",
        700: "#1e8308",
      },
      info: {
        main: "#0dcaf0",
        100: "#daebff",
        400: "#5da8ff",
        500: "#0dcaf0",
      },
      warning: {
        main: "#ffc107",
        50: "#fff8e1",
        600: "#ffb300",
        500: "#ffc107",
      },
      error: {
        main: "#FF4023",
        40: "#ffcea9",
        50: "#ffe1dd",
        100: "#ffe8d4",
        150: "#ffa294",
        200: "#FFC8C0",
        300: "#ffaa72",
        500: "#FF4023",
        600: "#ec1f00",
        700: "#c52b09",
      },
      grey: {
        50: isDark ? "#172036" : "#f6f7f9",
        100: isDark ? "#15203c" : "#eceef2",
        300: isDark ? "#8695AA" : "#b1bbc8",
        400: isDark ? "#8695AA" : "#9497aa",
        500: isDark ? "#8695AA" : "#64748B",
        600: isDark ? "#ffffff" : "#3A4252",
        700: isDark ? "#ffffff" : "#212529",
        800: isDark ? "#ffffff" : "#000000",
        900: isDark ? "#ffffff" : "#000000",
      },
      orange: {
        main: "#fe7a36",
        50: "#fff2f0",
        100: "#ffe8d4",
        500: "#fd5812",
        600: "#ec1f00",
        700: "#c52b09",
      },
      purple: {
        main: "#ad63f6",
        50: "#faf5ff",
        100: "#f3e8ff",
        500: "#ad63f6",
        600: "#9135e8",
        700: "#7c24cc",
      },
      divider: isDark ? "#172036" : "#ECEEF2",
    },
    typography: {
      fontFamily: interFontFamily,
      fontSize: 12.3,
      h1: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
      h2: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
      h3: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
      h4: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
      h5: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
      h6: {
        color: isDark ? "#ffffff" : "#3A4252",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#0c1427" : "#ffffff",
            borderRadius: "7px",
            boxShadow: isDark
              ? "0 2px 8px rgba(0, 0, 0, 0.3)"
              : "0 2px 8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#0c1427" : "#ffffff",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#0c1427" : "#ffffff",
            color: isDark ? "#ffffff" : "#3A4252",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? "#0c1427" : "#ffffff",
            borderRight: `1px solid ${isDark ? "#172036" : "#ECEEF2"}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
};

// Default theme (dark mode)
const theme = createAppTheme('dark');

export default theme;
