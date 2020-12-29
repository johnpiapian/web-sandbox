
function print(val){ console.log(val); }

// x -> first value; y -> second value
function Arr_switchElement(arr, x, y){
    let x_val = arr[x];
    let y_val = arr[y];

    arr[x] = y_val;
    arr[y] = x_val;

    // return arr;
}

// x -> move from; y -> move to
function Arr_moveElement(arr, x, y){
    let fixedFrom = x;
    let fixedTo = y;

    if(fixedFrom > fixedTo){
        while(fixedFrom > fixedTo){
            Arr_switchElement(arr, fixedFrom, fixedTo);
            fixedTo++;
        }
    }else{
        while(fixedFrom < fixedTo){
            Arr_switchElement(arr, fixedFrom, fixedTo);
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
        // el.setAttribute('class', 'task');
        // el.setAttribute('draggable', 'true');

        el.appendChild(text);

        node.append(el); 
    }
}


function init(){

    var tasks = ['John', 'Robin', 'Robert', 'Michael', 'Jon', 'James'];
    loadData(tasks);

}

init();

