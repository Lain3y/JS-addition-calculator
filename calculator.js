function additionfunction() {
    // document.getElementById() is used to access the HTML elements and parseFloat() to convert values into floating point numbers.
    var firstNumber = parseFloat(document.getElementById('firstnumber').value);
    var secondNumber = parseFloat(document.getElementById('secondnumber').value);

    // Check if the input values are valid numbers
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        // Add numbers together
        var sum = firstNumber + secondNumber;

        // Update the result area
        document.getElementById('resultarea').innerHTML = 'Result: ' + sum;
    } else {
        // Error message if invalid input
        document.getElementById('resultarea').innerHTML = 'Invalid input. Please enter valid numbers.';
    }
}

//I added a function to clear the form so user doesn't have to refresh the page to make a new calculation.
function clearForm() {
    document.getElementById('firstnumber').value = '';
    document.getElementById('secondnumber').value = '';
    document.getElementById('resultarea').innerHTML = 'Result: ';
   
}
