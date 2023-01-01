let stack = document.querySelector(".stack");
// stack of card 만들고 순서 뒤집은 것으로 stack에 초기화
[...stack.children].reverse().forEach(i => stack.append(i));

stack.addEventListener("click", swap);


function swap(e){
  //가장 앞에 있는 card : card:last-child  
  let card = document.querySelector(".card:last-child");
  if(e.target !== card) return;
  card.style.animation = "swapNext 400ms";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 400)
};


console.log([...stack.children]);