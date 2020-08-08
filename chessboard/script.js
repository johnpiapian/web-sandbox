// Utility
function print(val){
    console.log(val);
}

function addClass(el, _class){
    if(el.hasAttribute('class')){
        el.setAttribute('class', el.getAttribute('class') + _class);
    }
}
// **********


function generateLine(type, length){
    let line = [];
    for (let i = 0; i < length; i++) {
        if(type == 'odd'){
            if(i%2 == 1){ // if odd
                line[i] = 'color-1';
            }else{
                line[i] = 'color-2';
            }
        }else{ // if even
            if(i%2 == 0){ // if even
                line[i] = 'color-1';
            }else{
                line[i] = 'color-2';
            }
        }
    }
    return line;
}


function generateBoard(size){
    let board = [];
    for (let index = 0; index < size; index++) {
        let type;
        if(index%2 == 0){
            type = 'odd';
        }else{
            type = 'even';
        }
        board[index] = generateLine(type, size);
    } 
    return board;
}


function constructDOM(board){
    var boardEl = document.createElement('div');
        boardEl.setAttribute('id', 'board');
        boardEl.setAttribute('class', 'board');

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    var vcounter = 1;

    board.forEach(line => {

        let row = document.createElement('div');
            row.setAttribute('id', 'row');
            row.setAttribute('class', 'row');
        
        var hcounter = 0;

        line.forEach(square => {

            let column = document.createElement('div');
                column.setAttribute('id', 'square');
                column.setAttribute('class', 'square '+ square);
                column.setAttribute('data', vcounter + alphabet[hcounter]);

            row.append(column);
            hcounter++;
        });

        boardEl.append(row);
        vcounter++;
    });

    document.getElementById('chess-container').append(boardEl);

}

function generateSquareIDs(){
    let row = [1,2,3,4,5,6,7,8];
    let column = ['a','b','c','d','e','f','g','h'];
    let squares = [];

    row.forEach(row => {
        column.forEach(col => {
            squares.push(row+col);
        });
    });

    return squares;
}

function getSquare(cellID){
    let el = document.querySelector("[data='"+cellID+"']");
    return el;
}

function insertImg(element, url){
    let span = document.createElement('span');
        span.setAttribute('class', 'pawn')

    let img = document.createElement('img');
        img.setAttribute('src', url);

    span.append(img);

    element.append(span);
}

function boardClick_handler(e){
    let element = e.target;
    let cellID = element.getAttribute('data');

    // This will insert a pawn image to clicked square
    // insertImg(element, 'imgs/w_pawn.png');

    // print(element.id);
    /* if(element.id === 'square'){
        element.innerHTML = cellID;
    } */

    animation(generateSquareIDs());
}

function animation(squareIDs){
    
    let id = setInterval(frame, 5);
    
    let pos = 0;
    let limit = 0;
    let last = 0;

    function frame() {

        print(limit);
        print(last);

        if (pos >= last) {
            if(squareIDs.length == limit){
                clearInterval(id);
            }else{
                pos = 0;
                last = squareIDs.length - limit;
                limit++;
            }
        } else {
            // getSquare(squareIDs[pos]).setAttribute('class',);

            if(pos > 0){
                getSquare(squareIDs[pos-1]).classList.remove('color-3');
            }

            getSquare(squareIDs[pos]).classList.add('color-3');

            pos++;
        }
    }

}

function init(){
    var board = generateBoard(8);
        
    constructDOM(board);

    // Event handler
    document.getElementById('board').onclick = boardClick_handler;
}


init();