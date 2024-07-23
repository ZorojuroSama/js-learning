const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;

    if (e.target.id === 'dark') {
      body.style.backgroundColor = '#212121';
      body.style.color = 'white';
    } else if (e.target.id === 'blue') {
      body.style.color = 'white';
    } else {
      body.style.color = 'black';
    }
  });
});
