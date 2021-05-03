const form = document.getElementById('feedback-form');
const infoBlock = document.getElementById('feedback-result');

function displayResult(feedback) {
  infoBlock.classList.remove('feedback-result_error');
  let feedbackString = '';
  for (const field in feedback) {
    feedbackString += `<li>${field}: <b>${feedback[field].replaceAll('\n', '<br />')}</b></li>`;
  }
  infoBlock.innerHTML = feedbackString;
}

function displayError(message) {
  infoBlock.classList.add('feedback-result_error');
  infoBlock.textContent = message;
}

window.onload = function() {
  async function getFeedback(event) {
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

    const response = await fetch(feedbackUri, options);
    const json = await response.json();
    if (response.ok) {
      displayResult(json);
    } else {
      displayError(json.msg);
    }
  }

  form.addEventListener('submit', getFeedback);
}
