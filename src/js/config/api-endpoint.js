import Config from './config-endpoint';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  STORIES: `${Config.BASE_URL}/stories`,
};

export default ApiEndpoint;
