import Auth from '../network/auth';
import CheckUserAuth from './auth/check-user-auth';

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const button = document.querySelector('button');
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        button.innerHTML = 'Sign Up';
        this._goToLoginPage();
      } catch (error) {
        console.error(error);
        button.innerHTML = 'Sign Up';
        const alert = document.querySelector('#alertError');
        alert.textContent = error.response.data.message;
        alert.classList.remove('d-none');
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.password.length < 8) {
      return false;
    }
    if (formData.name.length < 6) {
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

  _goToLoginPage() {
    window.location.href = '/login.html';
  },
};

export default Register;
