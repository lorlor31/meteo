console.log("Connection Script");

import { meteoData } from "./functions.js";
import { left, right } from "./dom.js";
import { NCards, initializeLocation } from "./parameters.js";

// meteoData(url, "classic");
export var path = "classic";

// ChangeStyle button text according to the actual mode 
changeStyle.addEventListener("click", () => {
  //path is the folder that contains png pictures (realistic || classic )
  // change the text of the button 
  if (changeStyle.innerText === "REALISTE") {
    changeStyle.innerText = "CLASSIQUE";
    path = "realistic";
  } else {
    changeStyle.innerText = "REALISTE";
    path = "classic";
  }
  // reload the data with the right pictures
  initializeLocation();
});

const step = 5.3; // tinyCard.offsetWidth;
// currentCard is the index of the current card on the left of the container
let currentCard=1
// i is the factor of offsetLeft 
let i = 0;
// j is the factor of offsetLeft 
let j = 0 ;

// left button actions
left.addEventListener("click", ()=>{
  j--
  let offsetRight = i*step ;
  let offsetLeft = -j*step ;
  let offset = offsetRight - offsetLeft ;
  list.style.transform= `translateX(${-offset}rem)`;
  if (currentCard <=2 ) {
    left.classList.add("invisible");
  }  
  if (currentCard <NCards-1 ) {
    right.classList.remove("invisible");
  } 
  console.log(currentCard);
  currentCard-- ;
  }
) ;
// right button actions
right.addEventListener("click", ()=>{
  i++
  let offsetRight = i*step ;  
  let offsetLeft = -j*step ;
  let offset = offsetRight - offsetLeft ;
  list.style.transform= `translateX(${-offset}rem)`;
  // j++ ;  
  // console.log(i, NCards);
  if (i >=1 ) {
    left.classList.remove("invisible");
  } 
  if (currentCard >NCards-7 ) {
    right.classList.add("invisible");
  } 
  console.log(currentCard);
  currentCard++ ;
  }
) ;
//the lines below may be erased
// if (i >1 ) {
//   left.classList.toggle("invisible");
// } 

list.style.transition = "750ms";
