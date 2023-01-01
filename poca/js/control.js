let prevBtn = document.querySelector("#prevBtn");
let flipBtn = document.querySelector("#flipBtn");
let nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", swapNext);
prevBtn.addEventListener("click", swapPrev);

function swapNext(e){
  let card = document.querySelector(".card:last-child");
  card.style.animation = "swapNext 400ms forwards";
  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 400)
};

function swapPrev(e){
  let card = document.querySelector(".card:first-child");
  let frontcard = document.querySelector(".card:last-child");
  card.style.animation = "swapPrev 400ms";
  frontcard.style.animation = "swapBack 400ms";

  setTimeout(() => {
    card.style.animation = "";
    stack.append(card);
  }, 400)
}