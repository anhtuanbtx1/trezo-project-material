const fs = require('fs');
const path = require('path');

// Script để tạo cấu trúc thư mục theo mô hình Trezo
const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created: ${dirPath}`);
  }
};

const createFile = (filePath, content = '') => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`📄 Created: ${filePath}`);
  }
};

console.log('🏗️ Creating project structure based on Trezo architecture...');

// Main directories
const directories = [
  'src/components',
  'src/components/Layout',
  'src/components/Layout/LeftSidebarMenu',
  'src/components/Layout/TopNavbar',
  'src/components/Layout/Footer',
  'src/components/Layout/ControlPanel',
  'src/components/Dashboard',
  'src/components/Dashboard/eCommerce',
  'src/components/Dashboard/CRM',
  'src/components/Dashboard/Analytics',
  'src/components/Apps',
  'src/components/Apps/Calendar',
  'src/components/Apps/Chat',
  'src/components/Apps/Email',
  'src/components/Apps/ToDoList',
  'src/components/Apps/KanbanBoard',
  'src/components/Authentication',
  'src/components/UiKit',
  'src/components/UiKit/Buttons',
  'src/components/UiKit/Forms',
  'src/components/UiKit/Tables',
  'src/components/UiKit/Charts',
  'src/components/eCommerce',
  'src/components/eCommerce/Products',
  'src/components/eCommerce/Orders',
  'src/components/eCommerce/Customers',
  'src/pages',
  'src/pages/dashboard',
  'src/pages/apps',
  'src/pages/ecommerce',
  'src/pages/authentication',
  'src/pages/ui-kit',
  'src/pages/charts',
  'src/pages/forms',
  'src/pages/tables',
  'src/styles',
  'src/utils',
  'src/hooks',
  'src/context',
  'public/images',
  'public/images/dashboard',
  'public/images/users',
  'public/images/products'
];

// Create directories
directories.forEach(createDirectory);

// Create basic files with templates
const files = [
  {
    path: 'src/theme.js',
    content: `import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F6F7F9",
    },
    text: {
      primary: "#64748B",
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
    error: {
      main: "#FF4023",
      50: "#ffe1dd",
      100: "#ffe8d4",
      500: "#FF4023",
      600: "#ec1f00",
      700: "#c52b09",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 12.3,
  },
});

export default theme;`
  },
  {
    path: 'src/styles/globals.scss',
    content: `// Global styles for the admin dashboard
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #F6F7F9;
  color: #64748B;
}

.main-wrapper-content {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
}

.main-wrapper-content.active .main-content {
  margin-left: 0;
}

// Responsive
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 15px;
  }
}`
  },
  {
    path: 'src/styles/dark.scss',
    content: `:root {
  --darkBodyBg: #0a0e19;
  --darkCardBg: #0c1427;
  --darkBorder: #172036;
  --darkBodyColor: #8695AA;
  --darkSecondaryColor: #15203c;
}

.dark-theme {
  background-color: var(--darkBodyBg);
  color: var(--darkBodyColor);
  
  .rmui-card {
    background-color: var(--darkCardBg);
    border-color: var(--darkBorder);
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #fff !important;
  }
}`
  },
  {
    path: 'src/components/Layout/index.js',
    content: `export { default as LeftSidebarMenu } from './LeftSidebarMenu';
export { default as TopNavbar } from './TopNavbar';
export { default as Footer } from './Footer';
export { default as ControlPanel } from './ControlPanel';`
  },
  {
    path: 'src/utils/constants.js',
    content: `// Application constants
export const APP_NAME = 'My Admin Dashboard';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Routes
export const ROUTES = {
  DASHBOARD: '/dashboard',
  ECOMMERCE: '/dashboard/ecommerce',
  CRM: '/dashboard/crm',
  ANALYTICS: '/dashboard/analytics',
  APPS: '/apps',
  CALENDAR: '/apps/calendar',
  CHAT: '/apps/chat',
  EMAIL: '/apps/email',
  TODO: '/apps/todo',
  KANBAN: '/apps/kanban',
  AUTH: '/auth',
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

// Theme modes
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};`
  },
  {
    path: 'src/hooks/useTheme.js',
    content: `import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggleTheme };
};`
  },
  {
    path: 'README_PROJECT_SETUP.md',
    content: `# My Admin Dashboard

Dự án admin dashboard được xây dựng dựa trên kiến trúc Trezo Admin Template.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 hoặc cao hơn)
- npm hoặc yarn

### Installation
\`\`\`bash
npm install
\`\`\`

### Development
\`\`\`bash
npm start
\`\`\`

### Build
\`\`\`bash
npm run build
\`\`\`

## 🏗️ Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Layout/         # Layout components
│   ├── Dashboard/      # Dashboard components
│   ├── Apps/          # Application components
│   └── UiKit/         # UI Kit components
├── pages/             # Page components
├── styles/            # SCSS stylesheets
├── utils/             # Utility functions
├── hooks/             # Custom hooks
└── context/           # React context
\`\`\`

## 🎨 Features

- ✅ Material-UI integration
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Modular architecture
- ✅ SCSS styling
- ✅ Chart integration ready
- ✅ Authentication structure

## 📚 Next Steps

1. Customize theme colors in \`src/theme.js\`
2. Add your dashboard components
3. Implement authentication
4. Add your business logic
5. Configure API integration
`
  }
];

// Create files
files.forEach(file => createFile(file.path, file.content));

console.log('\n🎉 Project structure created successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run: chmod +x setup-dependencies.sh && ./setup-dependencies.sh');
console.log('2. Start building your components');
console.log('3. Customize the theme in src/theme.js');
console.log('4. Add your business logic');
