
function hideContextMenu(){
    document.getElementById('contextMenu').classList.add('hidden');
}

function showContextMenu(){
    document.getElementById('contextMenu').classList.remove('hidden');
}

function toggleContextMenu(){
    let contextmenuEl = document.getElementById('contextMenu');

    if(contextmenuEl.classList.contains('hidden')){
        hideContextMenu();
    }else{
        showContextMenu();
    }
}

function moveContextMenu(pos){
    let contextmenuEl = document.getElementById('contextMenu');

    contextmenuEl.style.top = pos[1] + 'px';
    contextmenuEl.style.left = pos[0] + 'px';
}

function handleContextMenu(pos){
    showContextMenu();
    moveContextMenu(pos);
}

function eventHandlers(){
    document.documentElement.oncontextmenu = (e => {
        handleContextMenu([e.pageX, e.pageY]);
        e.preventDefault();
    });

    document.body.onclick = (() => {
        hideContextMenu();
    });
}

function app(){
    eventHandlers();
}

app();
