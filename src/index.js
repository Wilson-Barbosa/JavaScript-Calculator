/* Function that converts and calculates the final expression and sends the result back to the screen */
function calculate(){

    //parses the array into a string
    fullexpression = array_Expression.join('');

    const final_result = eval(full_Expression);

    
    document.getElementById('output-text').textContent = final_result;
}





