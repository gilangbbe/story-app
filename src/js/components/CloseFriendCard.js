import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CloseFriendCard extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    imgPath: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div
        class="card mb-3 position-relative top-0 start-50 translate-middle-x shadow"
        style="width: 18rem;"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${this.imgPath}"
              class="rounded-circle position-relative top-50 start-50 translate-middle"
              style="width: 60%;"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last online 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('close-friend-card', CloseFriendCard);
