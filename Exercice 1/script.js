let guess = Math.floor(Math.random() * (10 + 1));

const startGame = (nbTries) => {

    if (nbTries == 0) {

        window.alert(`:/ the answer is : ${guess}`);
        guess = Math.floor(Math.random() * (10 + 1));
    } else {
        n = window.prompt("guess");
        
        if (n < 0 || n > 10) {
            window.alert("enter a number between 0 and 10");
            startGame(nbTries);
        } else if (n == guess) {
            window.alert("correct");
            guess = Math.floor(Math.random() * (10 + 1));
        } else {
            window.alert("try again");
            startGame(nbTries - 1);
            nbTries--;
        }
    }
    return true;
}

