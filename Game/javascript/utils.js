export const squares = document.querySelectorAll('.item')
export const resetButton = document.getElementById("resetButton")
export let resultDisplay = document.createElement('h1')




export function checkResult(){
    if(squares[0].getElementsByClassName('crossImage')[0] && squares[1].getElementsByClassName('crossImage')[0] && squares[2].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }else if(squares[3].getElementsByClassName('crossImage')[0] && squares[4].getElementsByClassName('crossImage')[0] && squares[5].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }else if(squares[6].getElementsByClassName('crossImage')[0] && squares[7].getElementsByClassName('crossImage')[0] && squares[8].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }
    
    if(squares[0].getElementsByClassName('crossImage')[0] && squares[3].getElementsByClassName('crossImage')[0] && squares[6].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }else if(squares[1].getElementsByClassName('crossImage')[0] && squares[4].getElementsByClassName('crossImage')[0] && squares[7].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }else if(squares[2].getElementsByClassName('crossImage')[0] && squares[5].getElementsByClassName('crossImage')[0] && squares[8].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }

    if(squares[0].getElementsByClassName('crossImage')[0] && squares[4].getElementsByClassName('crossImage')[0] && squares[8].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }else if(squares[2].getElementsByClassName('crossImage')[0] && squares[4].getElementsByClassName('crossImage')[0] && squares[6].getElementsByClassName('crossImage')[0]){
        crossesWin()
    }


    if(squares[0].getElementsByClassName('noughtImage')[0] && squares[1].getElementsByClassName('noughtImage')[0] && squares[2].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }else if(squares[3].getElementsByClassName('noughtImage')[0] && squares[4].getElementsByClassName('noughtImage')[0] && squares[5].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }else if(squares[6].getElementsByClassName('noughtImage')[0] && squares[7].getElementsByClassName('noughtImage')[0] && squares[8].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }
    
    if(squares[0].getElementsByClassName('noughtImage')[0] && squares[3].getElementsByClassName('noughtImage')[0] && squares[6].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }else if(squares[1].getElementsByClassName('noughtImage')[0] && squares[4].getElementsByClassName('noughtImage')[0] && squares[7].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }else if(squares[2].getElementsByClassName('noughtImage')[0] && squares[5].getElementsByClassName('noughtImage')[0] && squares[8].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }
    
    if(squares[0].getElementsByClassName('noughtImage')[0] && squares[4].getElementsByClassName('noughtImage')[0] && squares[8].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }else if(squares[2].getElementsByClassName('noughtImage')[0] && squares[4].getElementsByClassName('noughtImage')[0] && squares[6].getElementsByClassName('noughtImage')[0]){
        noughtsWin()
    }
    
    isDraw()
}

//Draw Function
export function isDraw (){
    const imgArray = document.getElementsByClassName('img')
    const container = document.getElementsByClassName('outer-grid-container')[0]
    if(imgArray.length === 9 && !resultDisplay.innerHTML){
      resultDisplay.innerHTML = "It's a Draw!"
      resultDisplay.classList.add('finalMessage')
      container.appendChild(resultDisplay)
  }
}

export function crossesWin(){
    const container = document.getElementsByClassName('outer-grid-container')[0]
    container.appendChild(resultDisplay)
    resultDisplay.classList.add('finalMessage')
    resultDisplay.innerHTML = 'Crosses Win!'
}
export function noughtsWin(){
    const container = document.getElementsByClassName('outer-grid-container')[0]
    container.appendChild(resultDisplay)
    resultDisplay.classList.add('finalMessage')
    resultDisplay.innerHTML = 'Noughts Win!'
}

export function computerClick(){
    const board = document.getElementsByClassName('item')
    for(let i = 0; i < board.length; i++){
        const num = Math.floor(Math.random() * 9)
        const f = board[num]
        if(f.getElementsByClassName('img').length < 1 ){
            const X = document.createElement('img');
            f.appendChild(X)
            X.src = "./images/Naught.png"
            X.classList.add('img', 'noughtImage')
            checkResult()
            break;
        }else{
            continue;
        }
    }
    
}
