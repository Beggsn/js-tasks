let dark = false;
const btn = document.querySelector('.button');
btn.addEventListener('click', function() {
  dark = !dark;
//   console.log(dark);
  if (dark) {
    document.body.classList.add('black');
    document.body.classList.remove('white');
    btn.classList.add('button-black');
    document.title = 'Good Night';
  } else {
    document.body.classList.remove('black');
    document.body.classList.add('white');
    btn.classList.remove('button-black');
    document.title = 'Good Morning';
  }
});
