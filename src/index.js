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







//this function will be called when a number or operator is clicked
function createExpression(){

    //pushes the input to the array
    array_Expression.push(1);

    //updates the value in the screen
    screenContainer.textContent = array_Expression.join('');
}

//button
document.getElementById('one').addEventListener('click', createExpression);