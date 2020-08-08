// Utility
print = function(val){
    console.log(val);
}


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

function insertImg(element, url){
    let span = document.createElement('span');
        span.setAttribute('class', 'pawn')

    let img = document.createElement('img');
        img.setAttribute('src', url);

    span.append(img);

    element.append(span);
}

function boardClick_handler(e){
    // return e.target;
    let element = e.target;
    let cellID = element.getAttribute('data');

    insertImg(element, 'imgs/w_pawn.png');
}

function init(){
    var board = generateBoard(8);
        
    constructDOM(board);


    // Event handler
    document.getElementById('board').onclick = boardClick_handler;
}


init();