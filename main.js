const bg = "bg.jpg";
const cross = "tic-tac-toe-cross.jpg";
const circle = "tic-tac-toe-circle.jpg";
const fade = "0.5";
let currentTurn = cross;
let numberOfTurns = 0;
let index = 0;
let board = ["", "", "", "", "", "", "", "", ""];
let winner = "";
let cells = document.getElementsByClassName("cell");
let winLine = document.getElementById("line");
let lineTransform = document.querySelector(':root');

for (let i = 0; i < cells.length; i++) { 
    // Hint for the move
    cells[i].addEventListener('mouseover', () => {

        if (cells[i].alt == "" && winner == "") {
            cells[i].src = currentTurn;
            cells[i].style.opacity = fade;
        }
    });
    cells[i].addEventListener('mouseout', () => {
        if (cells[i].alt == "") {
            cells[i].src = bg;
            cells[i].style.opacity = 1;
        }
    });
    // Player input event handler
    cells[i].addEventListener('click', () => {
        if (cells[i].alt == "" && winner == "") {
            // Marking the boxes
            numberOfTurns++;
            cells[i].src = currentTurn;
            cells[i].alt = currentTurn;
            index = parseInt(cells[i].id);
            if (currentTurn == cross) board[index] = "x";
            else board[index] = "o";
            if (currentTurn == cross) {
                currentTurn = circle;
            } else {
                currentTurn = cross;
            }
            cells[i].style.opacity = 1;

            // Winner calculation
            if (numberOfTurns >= 5) {
                if (board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
                    if (board[0] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "84%");
                    // console.log("#1");
                }else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
                    if (board[3] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#2");
                }else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
                    if (board[6] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "17%");
                    // console.log("#3");
                }
                else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
                    if (board[0] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    winLine.style.rotate = "90deg";
                    lineTransform.style.setProperty("--transform_x", "33%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#4");
                }
                else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
                    if (board[1] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    winLine.style.rotate = "90deg";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#5");
                }
                else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
                    if (board[2] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    winLine.style.rotate = "90deg";
                    lineTransform.style.setProperty("--transform_x", "-33%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#6");
                }
                else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
                    if (board[0] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    winLine.style.rotate = "45deg";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#7");
                }
                else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
                    if (board[2] == "x") {
                        winner = "x";
                    } else {
                        winner = "o";
                    }
                    // win line draw
                    winLine.style.display = "block";
                    winLine.style.rotate = "-45deg";
                    lineTransform.style.setProperty("--transform_x", "0%");
                    lineTransform.style.setProperty("--transform_y", "52%");
                    // console.log("#8");
                }
                if(numberOfTurns == 9 && winner == ""){
                    winner = "draw";
                }
                let winDiv = document.getElementById("gameover");
                let text = "";
                if (winner == "x") {
                    text = "Winner is X";
                } else if(winner == "o"){
                    text = "Winner is O";
                } else if(winner == "draw"){
                    text = "Match Draw!";
                }
                if (winner != "") {
                    setTimeout(() => {
                        winDiv.style.display = "flex";
                        let wintext = document.getElementById("wintext");
                        wintext.innerHTML = text;
                    }, 1000);
                    
                }
            }
            
        }
    });
}