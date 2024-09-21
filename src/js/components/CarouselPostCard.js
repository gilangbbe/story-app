import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { format } from 'date-fns';

class CarouselPostCard extends LitWithoutShadowDom {
  static properties = {
    imgPath: { type: String, reflect: true },
    name: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    storyId: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.imgPath = '';
    this.name = '';
    this.createdAt = '';
    this.storyId = '';
  }

  render() {
    this.createdAt = format(new Date(this.createdAt), 'd MMMM yyyy');
    return html`
      <div
        class="container-post-card"
        id="${this.storyId}"
        @click=${this._changePost}
      >
        <div class="image-post-card">
          <img src="${this.imgPath}" />
        </div>
        <div class="desc-post-card">
          <p class="name">${this.name}</p>
          <p>${this.createdAt}</p>
        </div>
      </div>
    `;
  }

  async _changePost(event) {
    const postCard = event.currentTarget;
    const storyId = postCard.id;
    const data = await fetch('data/DATA.json');
    const responseJson = await data.json();
    const listStories = responseJson.listStory;
    const story = listStories.find((e) => e.id === storyId);
    const carouselPost = document.querySelector('carousel-post');
    carouselPost.setAttribute('imgPath', `${story.photoUrl}`);
    carouselPost.setAttribute('name', `${story.name}`);
    carouselPost.setAttribute('storyId', `${story.id}`);
    carouselPost.setAttribute('description', `${story.description}`);
    carouselPost.setAttribute('createdAt', `${story.createdAt}`);
  }
}

customElements.define('carousel-post-card', CarouselPostCard);
