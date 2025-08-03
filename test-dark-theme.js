// Test script để kiểm tra dark theme default
console.log('=== TESTING DARK THEME DEFAULT ===');

// Kiểm tra localStorage hiện tại
console.log('1. Current localStorage theme:', localStorage.getItem('theme'));

// Xóa localStorage để test default behavior
localStorage.removeItem('theme');
console.log('2. Removed theme from localStorage');

// Kiểm tra HTML class
const htmlElement = document.querySelector('html');
console.log('3. HTML classes:', htmlElement.className);
console.log('4. Has dark-theme class:', htmlElement.classList.contains('dark-theme'));

// Reload trang để test
console.log('5. Reloading page to test default behavior...');
setTimeout(() => {
    window.location.reload();
}, 1000);
