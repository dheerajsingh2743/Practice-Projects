const arr = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Dont watch the clock; do what it does. Keep going.",
  "Dream big and dare to fail.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish.",
  "The harder you work for something, the greater youll feel when you achieve it.",
  "Do something today that your future self will thank you for.",
  "It always seems impossible until its done.",
  "Discipline is the bridge between goals and accomplishment.",
  "Your limitation—its only your imagination.",
  "Dont stop when youre tired. Stop when youre done.",
  "Doubt kills more dreams than failure ever will.",
  "Small steps every day lead to big results.",
  "Make your life a masterpiece; imagine no limitations.",
  "Opportunities dont happen. You create them.",
  "Focus on progress, not perfection.",
  "Hard work beats talent when talent doesnt work hard.",
  "Stay consistent. Results will follow."
];

let bt = document.querySelector("#btn");
bt.onclick = function handleClick(){
let quote = document.querySelector(".div");
let rand = Math.floor(Math.random()*arr.length); // Floating Number 
quote.children[0].textContent = arr[rand];
}

function changeColor(str){
    document.querySelector("body").style.background = str;
}

// Using Event Listner Concept

// let clr = document.querySelector(".color");
// clr.addEventListener('click', (e) => {
// let clickChild = e.target; // Kis Child Par Click Hua Hai Milega
// let color = clickChild.id;
// document.querySelector("body").style.background = color;

// }
// );
