document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.body.classList.toggle('dark', currentTheme === 'dark');
  toggleBtn.textContent = currentTheme === 'dark' ? 'â˜€ï¸' : 'í¼™';
  
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? 'â˜€ï¸' : 'í¼™';
  });

  // Form submission
  const form = document.getElementById('story-form');
  const statusDiv = document.getElementById('submit-status');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const drama = document.getElementById('drama').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;
    
    // Create new story object
    const newStory = {
      id: Date.now(), // Unique ID based on timestamp
      drama,
      title,
      author,
      content,
      likes: 0
    };
    
    // Save to localStorage
    const stories = JSON.parse(localStorage.getItem('stories')) || [];
    stories.push(newStory);
    localStorage.setItem('stories', JSON.stringify(stories));
    
    // Show success message
    statusDiv.innerHTML = `
      <div class="success">
        <p>Your story "${title}" has been submitted successfully!</p>
        <a href="drama.html?drama=${drama}">View all ${getDramaName(drama)} stories</a>
      </div>
    `;
    
    // Reset form
    form.reset();
  });
  
  // Helper function to get drama name
  function getDramaName(dramaId) {
    const dramas = {
      cloy: "Crash Landing On You",
      goblin: "Goblin",
      itaewon: "Itaewon Class",
      boys: "Boys Over Flowers",
      dots: "Descendants of the Sun",
      tkem: "The King: Eternal Monarch"
    };
    return dramas[dramaId] || "K-Drama";
  }
});
