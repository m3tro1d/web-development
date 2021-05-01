const formElements = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  country: document.getElementById('country'),
  gender: document.getElementById('gender'),
  message: document.getElementById('message'),
};

function clearInvalidFields() {
  for (const elementName in formElements) {
    formElements[elementName].classList.remove('contact-form__error');
  }
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

function showSuccessMessage() {
  const formBlock = document.getElementById('form-success');

  const doneIcon = document.createElement('span');
  doneIcon.className = 'material-icons contact-form__success-done';
  doneIcon.appendChild(document.createTextNode('done'));

  const message = document.createElement('div');
  message.className = 'contact-form__success-message';
  message.appendChild(document.createTextNode('Ваше сообщение успешно отправлено'));

  formBlock.appendChild(doneIcon);
  formBlock.appendChild(message);
}

function run() {
  const form = document.getElementById('feedback-form');

  function sendFeedback(event) {
    event.preventDefault();

    const feedbackUri = '/';
    const body = {
      name: this.name.value,
      email: this.email.value,
      country: this.country.value,
      gender: this.gender.value,
      message: this.message.value,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    fetch(feedbackUri, options)
      .then(response => {
        if (response.ok) {
          // Show the actual message here
          clearInvalidFields();
          showSuccessMessage();
        } else {
          return response.json();
        }
      })
      .then(json => {
        if (json) {
          highlightInvalidFields(json);
        }
      });
  }

  form.addEventListener('submit', sendFeedback);
}

window.onload = run;
