function $p(val){ 
    console.log(val); 
}

function scrollProgress() {
    // console.log(window.scrollY);
    // console.log(document.body.scrollHeight);
    // console.log(document.body.scrollHeight - screen.height);
    document.getElementById('progress-bar').setAttribute('max', document.body.scrollHeight - screen.height);
    document.getElementById('progress-bar').setAttribute('value', window.scrollY);
}

function arr_removeAt(arr, x){
    if(x > -1){
        arr.splice(x, 1);
    }
    return arr;
}

// x -> first value; y -> second value
function arr_switchElement(arr, x, y){
    let x_val = arr[x];
    let y_val = arr[y];

    arr[x] = y_val;
    arr[y] = x_val;

    return arr;
}

// x -> move from; y -> move to
function arr_moveElement(arr, x, y){
    let fixedFrom = x;
    let fixedTo = y;

    if(fixedFrom > fixedTo){
        while(fixedFrom > fixedTo){
            arr_switchElement(arr, fixedFrom, fixedTo);
            fixedTo++;
        }
    }else{
        while(fixedFrom < fixedTo){
            arr_switchElement(arr, fixedFrom, fixedTo);
            fixedTo--;
        }
    }
}

function loadData(data){
    let node = document.getElementById('tasks');
        node.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        let text = document.createTextNode(data[i]);
        let el = document.createElement('li');
        el.setAttribute('class', 'task');
        el.setAttribute('id', i);
        el.setAttribute('draggable', 'true');

        el.appendChild(text);

        node.append(el); 
    }
}


function init(){
    let tasks = ['John', 'Robin', 'Robert', 'Michael', 'Jon', 'James'];
    let index = -1;
    let dragged = false;
    
    loadData(tasks);

    document.addEventListener('dragstart', (e) => {
        // $p(e.target.id);
        // $p(e.target.nodeName);
        if(e.target.nodeName === 'LI' && dragged === false){
            index = e.target.id;
            dragged = true;
        }
    });

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    document.addEventListener('drop', (e) => {
        if(e.target.nodeName === 'LI' && dragged === true){
            // $p(`${index} to ${e.target.id}`);
            arr_moveElement(tasks, index, e.target.id);
            dragged = false;
            loadData(tasks);
        }
    });

    window.onscroll = scrollProgress;
}

init();

