function displayResult(feedback) {
  const infoBlock = document.createElement('ul');
  infoBlock.classList.add('feedbacks-result__info');
  let feedbackString = '';
  for (const field in feedback) {
    feedbackString += `<li>${field}: <b>${feedback[field].replaceAll('\n', '<br />')}</b></li>`;
  }
  infoBlock.innerHTML = feedbackString;

  document.body.insertBefore(infoBlock, document.querySelector('.rest__link'));
}

function displayError(message) {
  const errorBlock = document.createElement('div');
  errorBlock.classList.add('feedbacks-result__error-msg');
  errorBlock.textContent = message;

  document.body.insertBefore(errorBlock, document.querySelector('.rest__link'));
}

function run() {
  const form = document.getElementById('feedback-form');

  function getFeedback(event) {
    event.preventDefault();

    const feedbackUri = '/feedbacks.php';
    const body = {
      email: this.email.value,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    fetch(feedbackUri, options)
      .then(response => response.json())
      .then(json => {
        if (json.msg) {
          displayError(json.msg);
        } else {
          displayResult(json);
        }
      });
  }

  form.addEventListener('submit', getFeedback);
}

window.onload = run;