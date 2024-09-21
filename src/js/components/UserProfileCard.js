import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class UserProfileCard extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div
        class="card position-relative top-0 start-50 translate-middle-x shadow"
        style="width: 18rem;"
      >
        <div class="card-body ">
          <div class="container-profile position-relative">
            <img
              src="/image/profile-picture.jpg"
              class="profile-picture mb-2"
            />
            <span
              class="badge-text position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger p-1 m-1"
            >
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
          <h5 class="card-title">Hello, Biru</h5>
          <p class="card-text">Software Engineer</p>
          <a type="button" class="btn btn-dark w-100" href="/add.html">
            Add Stories
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('user-profile-card', UserProfileCard);
