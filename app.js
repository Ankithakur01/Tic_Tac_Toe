let boxes = document.querySelectorAll(".box");
let container = document.querySelector("#container");
let game = document.querySelector("#game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");

let player1 = prompt("Enter Player 1 name");
let player2 = prompt("Enter Player 2 name");

let playerO = true; // Toggling player

let count = 0;

const winCheck = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];


const resetGame = () => {
    playerO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerText = 'O';
            playerO = false;
        } else {
            box.innerText = 'X';
            playerO = true;
        }
        box.disabled = true; 
        count++;
        let isWinner = winner();

        if (count === 9 && !isWinner) {
            drawGame();
        }
    });
});

const drawGame = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const enableBoxes = () => {
    boxes.forEach( (box) => {
        box.disabled = false
        box.innerText = "";
    });
};


const disableBoxes = () => {
    boxes.forEach( (box) => {
        box.disabled = true
    });
};


const showWinner = (player) => {
    
    if(player === 'O'){
        msg.innerText = `Winner is ${player1} !!`;
    } else {
        msg.innerText = `Winner is ${player2} !!`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();   
};


const winner = () => {
    for(let position of winCheck) {
        let pos1Val = boxes[position[0]].innerText;
        let pos2Val = boxes[position[1]].innerText;
        let pos3Val = boxes[position[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            } 
        } 
    }
};


resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click",resetGame);


// Add draw feature and add players name in aside 4 players  
