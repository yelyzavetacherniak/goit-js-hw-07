// Завдання 4

const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const info = {
    email,
    password,
  };

  console.log(info);

  loginForm.reset();
}
