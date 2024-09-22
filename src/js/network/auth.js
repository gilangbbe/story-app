import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register({ name, email, password }) {
    const button = document.querySelector('button');
    button.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    `;
    return await axios.post(ApiEndpoint.REGISTER, { name, email, password });
  },

  async login({ email, password }) {
    const button = document.querySelector('button');
    button.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    `;
    return await axios.post(ApiEndpoint.LOGIN, { email, password });
  },
};

export default Auth;
