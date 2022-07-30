let selectedNumber = null;
let selectedTile = null;

let wrongGuesses = 0;

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
    createGame();
}

function createGame() {
    // populating the board by creating 81 divs
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            let boardTile = document.createElement("div");
            boardTile.id = row.toString() + "-" + column.toString();
            if (puzzle[row][column] != "-") {
                boardTile.innerText = puzzle[row][column];
                boardTile.classList.add("populated-tiles");
            } // populates the board from the puzzle array skipping dashes
            if (row === 2 || row === 5) {
                boardTile.classList.add("row-line");
            }
            if (column === 2 || column === 5) {
                boardTile.classList.add("column-line");
            }
            boardTile.addEventListener("click", tileChoice);
            boardTile.classList.add("board-tile");
            document.getElementById("board").appendChild(boardTile);
        }
    }

    // populating the "number-selection" div in the html by creating 9 divs
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", numberChoice); 
        number.classList.add("number-selection-tile");
        document.getElementById("number-selection").appendChild(number);
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
            wrongGuesses += 1;
            document.getElementById("incorrect-guesses").innerText = wrongGuesses;
        }
    }
}