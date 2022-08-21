
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); //passing an argument

console.log(countEl); //passing which value to log unto the console

//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the button is clicked
//Change the count-el in the HTML to reflect the new count

let count = 0;

function increment() {
    console.log("The button was clicked");
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    let countSrt = count + " - ";
    //saveEl.innerText += countSrt; innerText doesn't account for the space
    saveEl.textContent += countSrt;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}

console.log("Let's count people on the subway!");

//Node.textContent


