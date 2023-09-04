//variables
let array_Expression = [];
let user_Input;
let screenContainer = document.getElementById('output-text');




//function that clears the screen

function clearScreen(){
    screenContainer.textContent = '';
}




//This function will be called when the = button is clicked
function calculate(){

    //parses the array into a string
    final_Expression = array_Expression.join('');

    //generates the result
    const result = eval(final_Expression);

    //sends the result to the screen
    screenContainer.textContent = result;
}
document.getElementById('equal-sign').addEventListener('click', calculate);





//this function will be called when a number or operator is clicked
function createExpression(input){

    //pushes the input to the array
    array_Expression.push(input);

    //updates the value in the screen
    screenContainer.textContent = array_Expression.join('');
}




/* The following lines are not optmized and I'm sure there are better ways to handle multiple buttons clicks into a more compact and easy to read code! Unfortunately, I wasn't able to do this, for now and I wish to see a somewhat working application*/
/* Later I plan to revised this if time allows me to do so! Maybe I should try querySelector or something*/

//The following lines of code are for each of the button clicks

function zero(){
    createExpression(0);
}
document.getElementById('zero').addEventListener('click', zero);



function one(){
    createExpression(1);
}
document.getElementById('one').addEventListener('click', one);



function two(){
    createExpression(2);
}
document.getElementById('two').addEventListener('click', two);



function three(){
    createExpression(3);
}
document.getElementById('three').addEventListener('click', three);



function four(){
    createExpression(4);
}
document.getElementById('four').addEventListener('click', four);


function five(){
    createExpression(5);
}
document.getElementById('five').addEventListener('click', five);



function six(){
    createExpression(6);
}
document.getElementById('six').addEventListener('click', six);



function seven(){
    createExpression(7);
}
document.getElementById('seven').addEventListener('click', seven);



function eight(){
    createExpression(8);
}
document.getElementById('eight').addEventListener('click', eight);



function nine(){
    createExpression(9);
}
document.getElementById('nine').addEventListener('click', nine);

/* ----------------------------------------------------- */

function add(){
    createExpression('+');
}
document.getElementById('plus-sign').addEventListener('click', add);



function subtract(){
    createExpression('-');
}
document.getElementById('minus-sign').addEventListener('click', subtract);



function multiply(){
    createExpression('*');
}
document.getElementById('multip-sign').addEventListener('click', multiply);



function divide(){
    createExpression('/');
}
document.getElementById('division-sign').addEventListener('click', divide);