import Auth from '../network/auth';
import Config from '../config/config-endpoint';
import Utils from '../utils/utils';
import CheckUserAuth from './auth/check-user-auth';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const button = document.querySelector('button');
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });

        button.innerHTML = 'Sign In';
        Utils.setUserToken(
          Config.USER_TOKEN_KEY,
          response.data.loginResult.token
        );
        Utils.setUserToken(
          Config.USER_USERNAME,
          response.data.loginResult.name
        );
        this._goToDashboardPage();
      } catch (error) {
        console.error(error);
        button.innerHTML = 'Sign In';
        const alert = document.querySelector('#alertError');
        alert.textContent = error.response.data.message;
        alert.classList.remove('d-none');
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.password.length < 8) {
      return false;
    }
    if (!formData.email.length) {
      return false;
    }
    if (!emailPattern.test(formData.email)) {
      return false;
    }
    return true;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Login;
