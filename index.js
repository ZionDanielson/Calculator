"use strict";


// Variables: These are all of the elements you wish to interact
// on your page:


//Number TextBoxes-
const num1          = document.getElementById("numTextbox1");
const num2          = document.getElementById("numTextbox2");
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
let sum             = (num1 + num2)
let difference      = (num1 - num2)
let product         = (num1 * num2)
let quotient        = (num1 / num2)





// Functions: Includes Initial, Add, Substract, Multiply, Divide,
// & Answer Button Functions (Clicking Buttons & Getting Answer)



window.onload = init; // When website loads
                      // it will initiate the following 
                      // "init" function...






// 1. Math & Answer Buttons (Click):

function init() {

    addBtn.onclick       = whenaddBtnClicked;        // add Button is clicked
    subtractBtn.onclick  = whensubtractBtnClicked;   // subtract Button is clicked
    multiplyBtn.onclick  = whenmultiplyBtnClicked;   // multiply Button is clicked
    divideBtn.onclick    = whendivideBtnClicked;     // divide Button is clicked

    answerBtn.onclick    = whenanswerBtnClicked;     // answer Button is clicked

}




// 2. Math & Answer Buttons (BTS) Calculating Answers


// "ADD" Button:
// - When "add" button is clicked let the answer (answerTextbox)
//   be num1 + num2 after the "answer" button is clicked.

function whenaddBtnClicked() {

    let sum = (num1 + num2)
    
    console.log(sum)

}

//console.log("the index.js has finished executing...");