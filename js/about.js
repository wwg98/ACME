const questions = document.querySelectorAll(".qnalist details");

/*
  let c = a.getAttribute('title')
  a.setAttribute(b,c)  a에서b 속성의 값을 c로 변경
  대상.removeAttribute(속성명)
  속성의 존재 유무
  대상.hasAttribute(속성명) true, false
*/

questions.forEach(question => {
  question.addEventListener("click", e => {
    e.preventDefault();
    //open 상태 확인
    let isOpen = question.hasAttribute("open");

    // 모든 details에서 open 제거
    questions.forEach(q => {
      q.removeAttribute("open");
    });

    //isOpen true이면 접고, isOpen false열기
    if (!isOpen) {
      question.setAttribute("open", "");
    }
  });
});

// questions.forEach(q => {
//   q.addEventListener("click", () => {
//     let parent = q.parentElement.parentElement;
//     let siblings = [...parent.children];
//     siblings.forEach(sibling => {
//       if (parent !== sibling) {
//         sibling.querySelector("details").removeAttribute("open");
//       }
//     });
//   });
// });
