const Dashboard = {
  async init() {
    await this._renderInitial();
    this._renderSideSection();
  },

  async _renderInitial() {
    const fetchStories = await fetch('/data/DATA.json');
    const response = await fetchStories.json();
    this._listStories = response.listStory;
    this._renderCarouselPost(this._listStories.slice(0, 3));
    this._renderMainContent(this._listStories);
  },

  _renderCarouselPost(stories) {
    const carouselContainer = document.querySelector('#carousel-container');
    const carouselPost = document.createElement('carousel-post');
    const postCardContainer = document.createElement('div');
    postCardContainer.classList.add('container-carousel-post-card');
    carouselPost.setAttribute('imgPath', `${stories[0].photoUrl}`);
    carouselPost.setAttribute('name', `${stories[0].name}`);
    carouselPost.setAttribute('description', `${stories[0].description}`);
    carouselPost.setAttribute('createdAt', `${stories[0].createdAt}`);
    carouselPost.setAttribute('storyId', `${stories[0].id}`);
    postCardContainer.innerHTML = this._renderPostCard(stories);
    carouselPost.append(postCardContainer);
    carouselContainer.append(carouselPost);
  },

  _renderPostCard(stories) {
    let postCard = '';
    for (let story of stories) {
      postCard += `
        <carousel-post-card 
          imgPath="${story.photoUrl}";
          name="${story.name}";
          createdAt="${story.createdAt}";
          storyId="${story.id}";
        ></carousel-post-card>
      `;
    }
    return postCard;
  },

  _renderSideSection() {
    const sideSection = document.querySelector('#user-profile');
    const UserProfileCard = document.createElement('user-profile-card');
    sideSection.append(UserProfileCard);
  },

  _renderMainContent(stories) {
    const mainSection = document.querySelector('#main-section');
    let cardContent = '';
    for (let story of stories) {
      cardContent += `
        <card-content
          imgPath="${story.photoUrl}";
          name="${story.name}";
          createdAt="${story.createdAt}";
          storyId="${story.id}";
          description="${story.description}";
        ></card-content>
      `;
    }
    mainSection.innerHTML = cardContent;
  },
};

export default Dashboard;
