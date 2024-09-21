const Add = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const evidenceInput = document.querySelector('#validationCustomImage');
    evidenceInput.addEventListener('change', () => {
      this._updatePhotoPreview();
    });

    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false
    );
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
      this._goToDashboardPage();
    }
  },

  _getFormData() {
    const evidenceInput = document.querySelector('#validationCustomImage');
    const descriptionInput = document.querySelector('#validationDescription');

    return {
      evidence: evidenceInput.files[0],
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
