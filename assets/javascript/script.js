let selectedNumber = null;
let selectedTile = null;

let easyLives = 12;
let mediumLives = 7;
let hardLives = 3;

let numberOfLives;


let puzzle = [
    "43526978-",
    "68257149-",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
]

let puzzleSolution = [
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
]


window.onload = function() {
    id("start-button").addEventListener("click", createGame);
}

// function to abbreviate document.getElementById()
function id(id) {
    return document.getElementById(id);
}

// resetting the game
id("reset").addEventListener("click", function() {

    // clearing the tiles on the board
    let boardTiles = document.querySelectorAll(".board-tile");
    for (let i = 0; i < boardTiles.length; i++) {
        boardTiles[i].remove();
    }
    // clearing the tiles in the number selection area
    let numberTiles = document.querySelectorAll(".number-selection-tile");
    for (let i = 0; i < numberTiles.length; i++) {
        numberTiles[i].remove();
    }
    // clearing the lives
    id("lives").innerText = "";

});

function createGame() {

    // populating the number of lives based on difficulty selected
    if (id("diff-easy").checked) numberOfLives = easyLives;
    if (id("diff-medium").checked) numberOfLives = mediumLives;
    if (id("diff-hard").checked) numberOfLives = hardLives;
    document.getElementById("lives").innerText = "Lives Remaining: " + numberOfLives;

    // populating the board by creating 81 divs
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            let boardTile = document.createElement("div");
            boardTile.id = row.toString() + "-" + column.toString();
            // populates the board from the puzzle array skipping dashes
            if (puzzle[row][column] != "-") {
                boardTile.innerText = puzzle[row][column];
                boardTile.classList.add("populated-tiles");
            } 
            // adds darker lines to make rows 2, 5 and columns 2, 5 stand out
            if (row === 2 || row === 5) {
                boardTile.classList.add("row-line");
            }
            if (column === 2 || column === 5) {
                boardTile.classList.add("column-line");
            }
            boardTile.addEventListener("click", tileChoice);
            boardTile.classList.add("board-tile");
            id("board").appendChild(boardTile);
        }
    }

    // populating the "number-selection" div in the html by creating 9 divs
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", numberChoice); 
        number.classList.add("number-selection-tile");
        id("number-selection").appendChild(number);
    }

}

// The user selects the number
function numberChoice() {
    if (selectedNumber != null) {
        selectedNumber.classList.remove("user-selected-number");
    }
    selectedNumber = this;
    selectedNumber.classList.add("user-selected-number");
}

// The user then places the selected number on the board
function tileChoice() {
    if (selectedNumber) {
        if (this.innerText != "") {
            return // prevents overwriting of a previous selection
        }

        // finding the coordinates of the selected number on the board
        let numberCoordinates = this.id.split("-");
        let row = parseInt(numberCoordinates[0]);
        let column = parseInt(numberCoordinates[1]);

        if (puzzleSolution[row][column] === selectedNumber.id) {
            this.innerText = selectedNumber.id;
        } else {
            if (numberOfLives === 0) {
                numberOfLives += 0; // this stops the lives being deducted after a game has ended
            } else {
                numberOfLives -=1;
                id("lives").innerText = "Lives Remaining: " + numberOfLives;
            }
        }

        // winning the game
        for (let i = 0; i < this.length; i++) {
            if (i === "") return false;
        } return id("lives").innerText = "Congrats! You won :)";

        // losing the game
        if (numberOfLives === 0) {
            id("lives").innerText = "You lost :(";
        }
     }
}


