import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { format } from 'date-fns';

class CardContent extends LitWithoutShadowDom {
  static properties = {
    imgPath: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    storyId: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.imgPath = '';
    this.name = '';
    this.createdAt = '';
    this.storyId = '';
    this.description = '';
  }

  render() {
    this.createdAtShorten = format(new Date(this.createdAt), 'd MMMM yyyy');
    return html`
      <div
        id="${this.storyId}"
        class="card mb-4 border-0"
        style="height: 200px"
      >
        <div class="row g-0 h-100">
          <div class="col-md-4 h-100">
            <img src="${this.imgPath}" class="image-content rounded" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.description}</p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >${this.createdAtShorten}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-content', CardContent);
