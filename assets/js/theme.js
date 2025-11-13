// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light-mode';
const themeCheckbox = document.getElementById('theme-checkbox');

// Set initial theme
document.documentElement.setAttribute('data-theme', savedTheme);
if (savedTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}

// Listen for theme toggle
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});