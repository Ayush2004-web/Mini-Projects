const randomNumber =
    Math.floor(Math.random() * 10) + 1;
function checkGuess()
{
    const userGuess =
        parseInt(document.getElementById("guess").value);

    const message =
        document.getElementById("message");
    if(isNaN(userGuess))
    {
        message.innerHTML =
            "Please enter a number between 1 and 10.";
        return;
    }
    if(userGuess > randomNumber)
    {
        message.innerHTML =
            "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    }
    else if(userGuess < randomNumber)
    {
        message.innerHTML =
            "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    }
    else
    {
        message.innerHTML =
            "🎉 CONGRATULATIONS! YOU GUESSED THE CORRECT NUMBER.";
    }
}