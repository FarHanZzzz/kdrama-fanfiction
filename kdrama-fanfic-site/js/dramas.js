document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.body.classList.toggle('dark', currentTheme === 'dark');
  toggleBtn.textContent = currentTheme === 'dark' ? '‚òÄÔ∏è' : 'Ìºô';
  
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '‚òÄÔ∏è' : 'Ìºô';
  });
});
