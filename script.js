// Fake posts data
const fakePosts = [
  {
    title: "The Old Days",
    content: "Remember when we used to write letters instead of emails? Those were the days.",
    likes: 0
  },
  {
    title: "Retro Vibes",
    content: "Listening to vinyl records on a rainy day is the best feeling.",
    likes: 0
  },
  {
    title: "Classic Movies",
    content: "Nothing beats the charm of black-and-white movies.",
    likes: 0
  }
];

// Function to render posts
function renderPosts() {
  const postsContainer = document.querySelector('.posts');
  postsContainer.innerHTML = ''; // Clear existing posts

  fakePosts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button class="like-button" data-index="${index}">Like (${post.likes})</button>
    `;

    postsContainer.appendChild(postElement);
  });

  // Add event listeners to like buttons
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      fakePosts[index].likes += 1;
      renderPosts(); // Re-render posts to update like count
    });
  });
}

// Initial render
renderPosts();
