import {  crossesWin, noughtsWin, isDraw, checkResult, resetButton, resultDisplay, squares, computerClick } from "./utils.js";


//Event handlers
for(let item of squares){
  item.addEventListener('click', NoughtsPlayerChoice)
  item.addEventListener('click', CrossesPlayerChoice)
}

resetButton.addEventListener('click', reset)


function CrossesPlayerChoice(e){
    if(e.ctrlKey){
        const X = document.createElement('img');
        e.target.append(X)
        X.src = "./images/Cross.png"
        X.classList.add('img', 'crossImage')
        checkResult()
        if(document.getElementById('computerModeYes').checked === true){
            setTimeout(computerClick, 300)
        }
    }
}
function NoughtsPlayerChoice(e){
    if(e.altKey && document.getElementById('computerModeYes').checked === false){
        const X = document.createElement('img');
        e.target.append(X)
        X.src = "./images/Naught.png"
        X.classList.add('img', 'noughtImage')
        checkResult()
    }
}

function reset(e){
    const board = document.getElementsByClassName('img')
    for(let image of board){
        image.remove()
        let r = document.querySelectorAll('finalMessage')
        resultDisplay.remove()
        reset()
        r.remove()
    }
}

