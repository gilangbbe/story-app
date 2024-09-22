import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import Utils from '../utils/utils';
import Config from '../config/config-endpoint';
import CheckUserAuth from '../pages/auth/check-user-auth';

class UserProfileCard extends LitWithoutShadowDom {
  static properties = {
    username: { type: String, reflect: true },
  };
  constructor() {
    super();

    this.username = Utils.getUserToken(Config.USER_USERNAME);
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
          <h5 class="card-title">Hello, ${this.username}</h5>
          <p class="card-text">Software Engineer</p>
          <a type="button" class="btn btn-dark w-100 mb-2" href="/add.html">
            Add Stories
          </a>
          <button
            type="button"
            class="btn btn-dark w-100"
            @click=${this._userLogOut}
          >
            Logout
          </button>
        </div>
      </div>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    Utils.destroyUserToken(Config.USER_USERNAME);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define('user-profile-card', UserProfileCard);
