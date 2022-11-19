'use strict'

const Raqam = document.querySelector("#Raqam");
const btn = document.querySelector(".btn");

const randomson = document.querySelector("#random_son");
const remove = document.querySelector(".remove");

const ul = document.querySelector(".ul");



btn.addEventListener("click", function(){
  const li = document.createElement("li");
  const r = Raqam.value;
  const ran = Math.floor(Math.random()*30+1);
  if (Raqam.value !== "") {
    randomson.value = ran;
    Raqam.value = ""
    let randomNum = setTimeout(() => {
      const ran = Math.floor(Math.random()*30+1);
    }, 300);

    let randomNum1 = setTimeout(() => {
      const ran = Math.floor(Math.random()*30+1);
    }, 600);

    let randomNum2 = setTimeout(() => {
      const ran = Math.floor(Math.random()*30+1);
    },900);
    let randomNum3 = setTimeout(() => {
      const ran = Math.floor(Math.random()*30+1);
    }, 1200);
    let randomNum4 = setTimeout(() => {
      const ran = Math.floor(Math.random()*30+1);
    }, 1500);

    setTimeout(() => {
      randomson.value = randomNum;

    },300);
    setTimeout(() => {
      randomson.value = randomNum1;
    },600);
    setTimeout(() => {
      randomson.value = randomNum2;
    },900);
    setTimeout(() => {
      randomson.value = randomNum3;
    },1200);
    setTimeout(() => {
      randomson.value = randomNum4;
    },1500);

    setTimeout(()=>{
      function Promisify() {
        return new Promise(function (resolve, reject) {  
          if (r > ran ) {
              resolve("Large");
          }else{
              reject("small");
          }
        });
      }
      

      Promisify()
        .then(function (data) {   // then.bu rezolf
          console.log(data);
          li.textContent = data;
          ul.append(li);

        })
        .catch(function (data) {  // cetch.bu rejekt
          console.log(data);
          li.textContent = data;
          ul.append(li);
        });
    },1500);
    

        remove.addEventListener("click", function(){
          li.remove()
          randomson.value = "";
          


        })
  }
    
    
    
    

})









