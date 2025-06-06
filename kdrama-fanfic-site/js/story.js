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

  // Get story ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = parseInt(urlParams.get('id'));
  
  // Find the story
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  const story = stories.find(s => s.id === storyId);
  
  if (!story) {
    document.querySelector('main').innerHTML = `
      <div class="error">
        <h2>Story Not Found</h2>
        <p>The requested story could not be found.</p>
        <a href="index.html">Return to Home</a>
      </div>
    `;
    return;
  }
  
  // Display story
  document.getElementById('story-title').textContent = story.title;
  document.getElementById('story-author').textContent = story.author;
  document.getElementById('story-drama').textContent = getDramaName(story.drama);
  document.getElementById('story-content').innerHTML = 
    `<p>${story.content.replace(/\n/g, '</p><p>')}</p>`;
  document.getElementById('like-count').textContent = story.likes;
  
  // Like button functionality
  const likeBtn = document.getElementById('like-btn');
  likeBtn.addEventListener('click', () => {
    const stories = JSON.parse(localStorage.getItem('stories'));
    const storyIndex = stories.findIndex(s => s.id === storyId);
    
    if (storyIndex !== -1) {
      stories[storyIndex].likes++;
      localStorage.setItem('stories', JSON.stringify(stories));
      document.getElementById('like-count').textContent = stories[storyIndex].likes;
      likeBtn.disabled = true;
      likeBtn.textContent = `‚ù§Ô∏è ${stories[storyIndex].likes} Liked!`;
    }
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
