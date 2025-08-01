#!/bin/bash

# Script để cài đặt dependencies cho dự án mới dựa trên Trezo architecture

echo "🚀 Installing core dependencies..."

# Material-UI Core
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/x-data-grid @mui/x-date-pickers
npm install @mui/lab

# Routing
npm install react-router-dom

# Charts
npm install apexcharts react-apexcharts

# Calendar
npm install @fullcalendar/react @fullcalendar/daygrid

# Date handling
npm install dayjs

# Additional UI components
npm install swiper

# Icons
npm install remixicon

# Date/Time pickers dependencies
npm install @mui/x-date-pickers

# Rich text editor
npm install react-simple-wysiwyg

# Styling
npm install sass

echo "✅ Core dependencies installed!"

echo "🎨 Installing optional dependencies..."

# Optional: Additional chart types
# npm install recharts

# Optional: Form handling
# npm install react-hook-form

# Optional: State management (if needed)
# npm install @reduxjs/toolkit react-redux

# Optional: HTTP client
# npm install axios

echo "✅ All dependencies installed!"
echo "🎯 Ready to start building your admin dashboard!"
