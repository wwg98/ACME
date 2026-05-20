// 최상의 객체 바로 아래것으로 선택
// const body = document.body;

const slideWrapper = document.querySelector(".slidewrapper");
const slideContainer = slideWrapper.querySelector(".slidecontainer");
const slides = slideContainer.querySelectorAll("li");
const slideCount = slides.length;
const prevBtn = slideWrapper.querySelector(".prev");
const nextBtn = slideWrapper.querySelector(".next");
let currentIdx = 0;

/* 
window에 스크롤이 생기면 할일
  그 스크롤양이 0보다 크면 body에 active 추가
  0이면 active 제거
*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

/* slideContainer 너비 지정 */
slideContainer.style.width = `${slideCount * 100}%`;

/*슬라이드 이동 함수*/
function moveSlide(num) {
  slideContainer.style.transform = `translateX(${-(num / slideCount) * 100}%)`;
  currentIdx = num;
}

/*
다음 버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (마지막이면 첫번째 슬라이드로 이동)
  moveSlide(nextIdx) 실행
이전버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (첫번째 슬라이드면 마지막 슬라이드로 이동)
  moveSlide(nextIdx) 실행  
*/

nextBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  moveSlide(nextIdx);
});

prevBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
  moveSlide(nextIdx);
});
