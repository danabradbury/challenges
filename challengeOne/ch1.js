function calculate() {

    let userInput = document.getElementById('userInput');
    let userInputValue = userInput.value;
    console.log(userInputValue);

    let numberOfCharacters = userInputValue.length;
    console.log(numberOfCharacters);

    let numberOfCharactersInput = document.getElementById('numberOfCharacters');
    numberOfCharactersInput.value = numberOfCharacters;

    let reverseUserInput = document.getElementById('reverseUser');
    let backwords = reverseUserInput.value

    for (count = 0; count <= backwords.length; count++)
        backwords = userInputValue.substring(count, count + 1) + backwords;

    reverseUserInput.value = backwords

    console.log(reverseUserInput)
    console.log(backwords)

};
