// Random Number Generate
let randomNumber =
    Math.floor(Math.random() * 10) + 1;

// Function
function checkGuess()
{
    // User Guess
    let userGuess =
        parseInt(document.getElementById("guess").value);

    // Message Box
    let message =
        document.getElementById("message");

    // Validation
    if(isNaN(userGuess))
    {
        message.innerHTML =
            "Please enter a number between 1 and 10.";
        return;
    }

    // Greater Number
    if(userGuess > randomNumber)
    {
        message.innerHTML =
            "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    }

    // Smaller Number
    else if(userGuess < randomNumber)
    {
        message.innerHTML =
            "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    }

    // Correct Guess
    else
    {
        message.innerHTML =
            "🎉 CONGRATULATIONS! YOU GUESSED THE CORRECT NUMBER.";
    }
}