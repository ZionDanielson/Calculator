"use strict";


// Variables: These are all of the elements you wish to interact
// on your page:


//Number TextBoxes-
const num1          = document.getElementById("num1");
const num2          = document.getElementById("num2");
//Math Buttons-
const addBtn        = document.getElementById("addBtn");
const subtractBtn   = document.getElementById("subtractBtn");
const multiplyBtn   = document.getElementById("multiplyBtn");
const divideBtn     = document.getElementById("divideBtn");
//Answer Button-
const answerBtn     = document.getElementById("answerBtn");
//Answer TextBox-
const answerTextbox = document.getElementById("answerTextbox")

//More...
// let sum             = (num1 + num2)
// let difference      = (num1 - num2)
// let product         = (num1 * num2)
// let quotient        = (num1 / num2)





// Functions: Includes Initial, Add, Substract, Multiply, Divide,
// & Answer Button Functions (Clicking Buttons & Getting Answer)



window.onload = init; // When website loads
                      // it will initiate the following 
                      // "init" function...






// 1. Math & Answer Buttons (Click):

function init() {

    addBtn.onclick       = whenaddBtnClicked;        // add Button is clicked
    //subtractBtn.onclick  = whensubtractBtnClicked;   // subtract Button is clicked
    //multiplyBtn.onclick  = whenmultiplyBtnClicked;   // multiply Button is clicked
   //divideBtn.onclick    = whendivideBtnClicked;     // divide Button is clicked

}




// 2. Math & Answer Buttons (BTS) Calculating Answers


// "ADD" Button:
// - When "add" button is clicked let the answer (answerTextbox)
//   be num1 + num2 after the "answer" button is clicked.

function whenaddBtnClicked() {
// a.
    let num1value = parseFloat(num1.value); // This converts the num1 value into a number
    let num2value = parseFloat(num2.value); // This converts the num2 value into a number
// b.
    let sum = (num1value + num2value); // This function calculates the sum of the two number values
// c.
    answerTextbox.value = (sum); // This will display the sum/result in the answerTextbox

    console.log(sum) // This will dislay it in the console
// DONE
}

//console.log("the index.js has finished executing...");