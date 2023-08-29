export function arePasswordsEqual(pw1, pw2) {
    const areEqual = pw1 === pw2;
    return areEqual;
}

export function initApp() {
  const pwInput1 = document.querySelector("#password1");
  const pwInput2 = document.querySelector("#password2");
  const btn = document.querySelector("#button");
  const check = document.querySelector("#check");

  function checkPasswords() {
    const checkResult = arePasswordsEqual(pwInput1.value, pwInput2.value);
    if (checkResult) {
      check.innerText = "✅";
    } else {
      check.innerText = "❌";
    }
  }

  btn.addEventListener("click", checkPasswords);
}
