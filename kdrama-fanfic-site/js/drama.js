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

  // Get drama ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const dramaId = urlParams.get('drama');
  
  // Set drama title and description
  const dramaTitle = document.getElementById('drama-title');
  const dramaDescription = document.getElementById('drama-description');
  
  const dramaInfo = {
    cloy: {
      name: "Crash Landing On You",
      desc: "Alternate endings for the beloved romantic drama"
    },
    goblin: {
      name: "Goblin",
      desc: "Reimaginings of the fantasy romance"
    },
    itaewon: {
      name: "Itaewon Class",
      desc: "Different paths for Park Sae-ro-yi"
    },
    boys: {
      name: "Boys Over Flowers",
      desc: "New endings for the classic drama"
    },
    dots: {
      name: "Descendants of the Sun",
      desc: "Alternative military romance stories"
    },
    tkem: {
      name: "The King: Eternal Monarch",
      desc: "Parallel universe adventures"
    }
  };
  
  const drama = dramaInfo[dramaId] || { 
    name: "K-Drama", 
    desc: "Alternative fan endings" 
  };
  
  dramaTitle.textContent = drama.name;
  dramaDescription.textContent = drama.desc;
  
  // Display stories for this drama
  const container = document.getElementById('drama-stories');
  const stories = JSON.parse(localStorage.getItem('stories')) || [];
  const dramaStories = stories.filter(story => story.drama === dramaId);
  
  if (dramaStories.length === 0) {
    container.innerHTML = `
      <div class="no-stories">
        <p>No stories for this drama yet.</p>
        <a href="submit.html" class="button">Be the first to submit one!</a>
      </div>
    `;
    return;
  }
  
  dramaStories.forEach(story => {
    const storyEl = document.createElement('div');
    storyEl.classList.add('story');
    storyEl.innerHTML = `
      <h3>${story.title}</h3>
      <p><em>by ${story.author}</em></p>
      <p>${story.content.substring(0, 100)}...</p>
      <a href="story.html?id=${story.id}">Read More</a>
      <div class="likes">‚ù§Ô∏è ${story.likes} Likes</div>
    `;
    container.appendChild(storyEl);
  });
});
