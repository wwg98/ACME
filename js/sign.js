const inputs = document.querySelectorAll("form input");
const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");
const passwd = document.querySelector("#userpw");
const passwdCF = document.querySelector("#userpwcf");

form.addEventListener("submit", e => {
  e.preventDefault();
  let completed = 0;
  //대상.value   입력한 값 확인
  //input 포커스 적용, 대상.focus()
  for (let input of inputs) {
    if (!input.value) {
      input.focus();
      let pos = input.parentElement.offsetTop;
      let msg = `${input.getAttribute("id")}은 필수야~`;
      openFeedback(pos, msg);
      return;
    } else {
      ++completed;
    }
  }

  // 비밀버호 일치 확인 하기
  if (passwd.value && passwdCF.value) {
    if (passwd.value !== passwdCF.value) {
      let pos = passwdCF.parentElement.offsetTop;
      let msg = "비밀번호가 일치하지 않습니다";
      openFeedback(pos, msg);
    } else {
      closeFeedback();
    }
  }
});

function openFeedback(pos, msg) {
  feedback.style.top = `${pos}px`;
  feedback.innerHTML = `<p>${msg}</p>`;
  feedback.style.visibility = "visible";
}

function closeFeedback() {
  feedback.style.visibility = "hidden";
}
