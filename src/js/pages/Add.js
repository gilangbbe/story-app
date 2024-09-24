import CheckUserAuth from './auth/check-user-auth';
import Stories from '../network/stories';
import Config from '../config/config-endpoint';
import Utils from '../utils/utils';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const imageInput = document.querySelector('#validationCustomImage');
    imageInput.addEventListener('change', () => {
      this._updatePhotoPreview();
    });

    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        const alert = document.querySelector('#alertError');
        if (alert.classList.contains('d-block')) {
          alert.classList.replace('d-block', 'd-none');
        }
        this._sendPost();
      },
      false
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const button = document.querySelector('button');
      console.log('formData');
      console.log(formData);
      const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userToken}`,
        },
      };
      try {
        const response = await Stories.addStory(formData, config);
        button.innerHTML = 'Submit';
        this._goToDashboardPage();
      } catch (error) {
        console.log(error);
        button.innerHTML = 'Submit';
        const alert = document.querySelector('#alertError');
        alert.textContent = error.response.data.message;
        alert.classList.replace('d-none', 'd-block');
      }
    }
  },

  _getFormData() {
    const imageInput = document.querySelector('#validationCustomImage');
    const descriptionInput = document.querySelector('#validationDescription');

    return {
      photo: imageInput.files[0],
      description: descriptionInput.value,
    };
  },

  _updatePhotoPreview() {
    const evidenceImgChange = document.querySelector(
      '#validationCustomImageImgChange'
    );
    const evidenceImgInput = document.querySelector('#validationCustomImage');

    const photo = evidenceImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      evidenceImgChange.classList.remove('d-none');
      evidenceImgChange.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === ''
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;
