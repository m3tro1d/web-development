const MESSAGE_INTERVAL = 2000;

const form = document.getElementById('feedback-form');

const formElements = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  country: document.getElementById('country'),
  gender: document.getElementById('gender'),
  message: document.getElementById('message'),
};


function main() {
  form.addEventListener('submit', handleFeedbackSubmit);
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();

  const requestUri = '/';
  const options = getRequestOptions(form);

  defuseForm();
  try {
    await sendFeedback(requestUri, options);
    showSuccessMessage();
    clearInvalidFields();
    clearFormFields();
  } catch (error) {
    showErrorMessage(error.message);
    if (error.isBadRequest) highlightInvalidFields(error.json);
  }
  setTimeout(activateForm, MESSAGE_INTERVAL + 100);
}

function getRequestOptions(form) {
  const body = {
    name: form.name.value,
    email: form.email.value,
    country: form.country.value,
    gender: form.gender.value,
    message: form.message.value,
  };
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

function defuseForm() {
  form.removeEventListener('submit', handleFeedbackSubmit);
  form.addEventListener('submit', dummy);
}

function dummy(event) {
  event.preventDefault();
}

async function sendFeedback(url, options) {
  let response = null;
  let error = null;

  try {
    response = await fetch(url, options);
  } catch (e) {
    error = new Error('Ошибка запроса: ' + e.message);
    error.isBadRequest = false;
    throw error;
  }

  if (response) {
    if (response.ok) {
      return response;
    } else {
      error = new Error(response.statusText);
      if (response.status === 400) {
        error.isBadRequest = true;
        error.json = await response.json();
      }
      throw error;
    }
  }
}

function activateForm() {
  form.removeEventListener('submit', dummy);
  form.addEventListener('submit', handleFeedbackSubmit);
}

function showSuccessMessage() {
  const formBlock = document.getElementById('form-success');

  const doneIcon = document.createElement('span');
  doneIcon.className = 'material-icons contact-form__success-done';
  doneIcon.textContent = 'done';

  const message = document.createElement('div');
  message.className = 'contact-form__success-message';
  message.textContent = 'Ваше сообщение успешно отправлено';

  formBlock.appendChild(doneIcon);
  formBlock.appendChild(message);

  setTimeout(() => {
    formBlock.removeChild(doneIcon);
    formBlock.removeChild(message);
  }, MESSAGE_INTERVAL);
}

function clearInvalidFields() {
  for (const elementName in formElements) {
    formElements[elementName].classList.remove('contact-form__error');
  }
}

function clearFormFields() {
    form.name.value = '';
    form.email.value = '';
    form.country.value = 'RUS';
    form.gender.value = 'male';
    form.message.value = '';
}

function showErrorMessage(msg) {
  const formBlock = document.getElementById('form-success');

  const failIcon = document.createElement('span');
  failIcon.className = 'material-icons contact-form__success-done contact-form__success-failed';
  failIcon.textContent = 'close';

  const message = document.createElement('div');
  message.className = 'contact-form__success-message';
  message.textContent = 'Ошибка запроса: ' + msg;

  formBlock.appendChild(failIcon);
  formBlock.appendChild(message);

  setTimeout(() => {
    formBlock.removeChild(failIcon);
    formBlock.removeChild(message);
  }, MESSAGE_INTERVAL);
}

function highlightInvalidFields(errorObject) {
  clearInvalidFields();
  if (errorObject['name-error']) {
    formElements.name.classList.add('contact-form__error');
  }
  if (errorObject['email-error']) {
    formElements.email.classList.add('contact-form__error');
  }
  if (errorObject['country-error']) {
    formElements.country.classList.add('contact-form__error');
  }
  if (errorObject['message-error']) {
    formElements.message.classList.add('contact-form__error');
  }
  if (errorObject['gender-error']) {
    formElements.gender.classList.add('contact-form__error');
  }
}

window.onload = main;
