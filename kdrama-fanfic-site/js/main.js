// Initialize stories in localStorage
const initializeStories = () => {
  if (!localStorage.getItem("stories")) {
    const defaultStories = [
      {
        id: 1,
        drama: "cloy",
        title: "Crash Landing On You â€“ Alternate Ending",
        author: "se_rifan91",
        content: "As Yoon Se-ri stood by the border, Captain Ri's voice echoed through the trees. 'Se-ri-ya!' he called. She turned, tears streaming down her face. Instead of the bittersweet separation we saw, in this version, Captain Ri defects to South Korea. They build a life together in Seoul, with Captain Ri starting a security consultancy and Se-ri expanding her business empire. The final scene shows them visiting the DMZ together years later, hand-in-hand, looking back at the border that once separated them but now stands as a testament to their love that crossed all boundaries.",
        likes: 24
      },
      {
        id: 2,
        drama: "goblin",
        title: "Goblin â€“ What if Eun-Tak lived forever?",
        author: "kdramaQueen",
        content: "Years passed, but she never aged. When the Goblin's sword was pulled, something unexpected happened - Eun-Tak absorbed some of his powers. Now immortal, she wanders the earth waiting for his next reincarnation. Every 30 years, she finds him again. They live a lifetime together until he passes, and she must begin her search anew. The story follows their meetings through different eras - Joseon period, 1920s, present day, and finally in a futuristic 2140 where they discover a way to break the cycle.",
        likes: 42
      },
      {
        id: 3,
        drama: "boys",
        title: "Boys Over Flowers: Jan-di Chooses Ji-hoo",
        author: "F4Fanatic",
        content: "In the pouring rain, Jan-di runs past Jun-pyo waiting with his umbrella. She reaches Ji-hoo's clinic instead. 'I choose you,' she declares. The story explores their relationship development as Ji-hoo becomes a renowned surgeon and Jan-di a successful neurologist. Jun-pyo eventually matures and becomes a supportive friend, even helping plan their wedding. The final scene shows Jan-di and Ji-hoo opening a free medical clinic together, fulfilling both their dreams.",
        likes: 37
      }
    ];
    localStorage.setItem("stories", JSON.stringify(defaultStories));
  }
};

// Theme toggle functionality
const setupThemeToggle = () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.body.classList.toggle('dark', currentTheme === 'dark');
  toggleBtn.textContent = currentTheme === 'dark' ? 'â˜€ï¸' : 'í¼™';
  
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? 'â˜€ï¸' : 'í¼™';
  });
};

// Display stories
const displayStories = () => {
  const container = document.getElementById("story-container");
  const stories = JSON.parse(localStorage.getItem("stories")) || [];
  
  if (stories.length === 0) {
    container.innerHTML = '<p>No stories yet. Be the first to submit one!</p>';
    return;
  }
  
  container.innerHTML = '';
  
  stories.slice(0, 6).forEach(story => {
    const storyEl = document.createElement('div');
    storyEl.classList.add('story');
    storyEl.innerHTML = `
      <h3>${story.title}</h3>
      <p><em>by ${story.author}</em> | ${getDramaName(story.drama)}</p>
      <p>${story.content.substring(0, 100)}...</p>
      <a href="story.html?id=${story.id}">Read More</a>
    `;
    container.appendChild(storyEl);
  });
};

// Helper function to get drama name from ID
const getDramaName = (dramaId) => {
  const dramas = {
    cloy: "Crash Landing On You",
    goblin: "Goblin",
    itaewon: "Itaewon Class",
    boys: "Boys Over Flowers",
    dots: "Descendants of the Sun",
    tkem: "The King: Eternal Monarch"
  };
  return dramas[dramaId] || "K-Drama";
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  initializeStories();
  setupThemeToggle();
  displayStories();
});
