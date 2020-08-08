function scrollProgress() {
    // console.log(window.scrollY);
    // console.log(document.body.scrollHeight);
    // console.log(document.body.scrollHeight - screen.height);
    document.getElementById('progress-bar').setAttribute('max', document.body.scrollHeight - screen.height);
    document.getElementById('progress-bar').setAttribute('value', window.scrollY);
}

function setTask() {
    let value = ['hello', 'name', 'idk'];
    localStorage.setItem('tasks', JSON.stringify(value));
}

function loadTasks() {
    JSON.parse(localStorage.getItem('tasks')).forEach(element => {

        let text = document.createTextNode(element);
        let el = document.createElement('li');

        el.appendChild(text);

        document.getElementById('tasks').append(el);

    });
}

// Initialization
function init() {

    window.onscroll = scrollProgress;

    setTask();
    loadTasks();

}

init();