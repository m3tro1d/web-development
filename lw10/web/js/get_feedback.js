const form = document.getElementById('feedback-form');
const infoBlock = document.getElementById('feedback-result');


function main() {
  form.addEventListener('submit', handleFeedbackRequest);
}

async function handleFeedbackRequest(event) {
  event.preventDefault();

  const requestUri = '/feedbacks.php';
  const options = getOptions(form);

  try {
    const feedback = await fetchFeedback(requestUri, options);
    displayResult(feedback);
  } catch (error) {
    displayError(error.message);
  }
}

function getOptions(form) {
  const body = {
    email: form.email.value,
  };
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}

async function fetchFeedback(url, options) {
  let response = null;
  try {
    response = await fetch(url, options);
  } catch (e) {
    throw new Error('Ошибка запроса: ' + e.message);
  }
  if (response) {
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error(json.msg);
    }
  }
}

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

window.onload = main;
