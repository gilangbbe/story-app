import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavBar extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar bg-body-white">
        <div class="d-flex justify-content-center container-fluid">
          <div style="box-sizing: border-box;">
            <a class="navbar-brand" href="#">
              <img
                src="/icon/favicon.png"
                alt="Logo"
                width="30"
                class="d-inline-block align-text-top"
              />
              <span class="fw-bolder">Story</span>App
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
