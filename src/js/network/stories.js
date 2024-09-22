import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Stories = {
  async getAllStories(config) {
    return await axios.get(ApiEndpoint.STORIES, config);
  },

  async addStory(data, config) {
    const button = document.querySelector('button');
    button.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    `;
    return await axios.post(ApiEndpoint.STORIES, data, config);
  },
};

export default Stories;
