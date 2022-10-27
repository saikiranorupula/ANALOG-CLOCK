let hands = document.querySelectorAll("article");
let digital = document.querySelector("p");

let hr = hands[1];
let min = hands[0];
let sec = hands[2];


setInterval(() => {
  let sec_1 = (new Date().getSeconds() * 6);
  sec.style.transform = `rotate(${sec_1}deg)`;
  let min_1 = (new Date().getMinutes()) * 6;
  min.style.transform = `rotate(${min_1}deg)`;
  let hr_1 = (new Date().getHours()) * 30 + min_1 / 12;
  hr.style.transform = `rotate(${hr_1}deg)`;
  digital.innerHTML =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
}, 1000);
