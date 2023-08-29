const pwInput1 = document.querySelector('#password1');
const pwInput2 = document.querySelector('#password2');
const btn = document.querySelector('#button');
const check = document.querySelector('#check');


function checkPasswords() {
    if (pwInput1.value === pwInput2.value) {
        check.innerText = '✅';
    } else {
        check.innerText = '❌';
    }
}

btn.addEventListener('click', checkPasswords);