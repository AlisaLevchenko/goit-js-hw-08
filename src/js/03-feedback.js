import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const feedbackInput = document.querySelector('.feedback-form input');
const feedbackMessage = document.querySelector('.feedback-form textarea');

const formChange = function () {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: feedbackInput.value,
      message: feedbackMessage.value,
    })
  );
};

const getPreviousData = function () {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) return;
  feedbackInput.value = data.email;
  feedbackMessage.value = data.message;
};

const formSubmit = function (evt) {
  evt.preventDefault();
  console.log({
    email: feedbackInput.value,
    message: feedbackMessage.value,
  });
  form.reset();
  localStorage.clear();
};

feedbackInput.addEventListener('input', throttle(formChange, 500));
feedbackMessage.addEventListener('input', throttle(formChange), 500);
form.addEventListener('submit', formSubmit);

getPreviousData();

// console.log(inputChange);
