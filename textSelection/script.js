function print(val){
    console.log(val);
}

function replaceGlobally(original, searchTxt, replaceTxt) {
    const regex = new RegExp(searchTxt, 'g');
    return original.replace(regex, replaceTxt) ;
}

// End Utility

var highlightAllowed = true;

function activateHighlight(){
    highlightAllowed = true;

    document.getElementById('activate').classList.add('selected');
    document.getElementById('deactivate').classList.remove('selected');
}

function deactivateHighlight(){
    highlightAllowed = false;

    document.getElementById('deactivate').classList.add('selected');
    document.getElementById('activate').classList.remove('selected');
}

function selectionChanged(){ 
    // console.log(document.getSelection().toString().length);
    let selection = document.getSelection();

    if(selection.toString().trim().length > 0){
        
        let fullText = selection.focusNode.parentElement.innerHTML;
        let selectedText = selection.toString();

        let replacer = `<mark class='style-1'>${selectedText}</mark>`;

        let final = fullText.replace(selectedText, replacer);
        selection.focusNode.parentElement.innerHTML = final;
        print(final);
    }
}

function selectionStart(){
    if(highlightAllowed){
        // Call selectionChanged() when selection is complete
        document.onmouseup = selectionChanged;
    }
}

function app(){
    document.getElementById('activate').onclick = activateHighlight;
    document.getElementById('deactivate').onclick = deactivateHighlight;
    document.getElementById('clear').onclick = clear;
    // document.onselectionchange = selectionChanged;
    document.onselectionchange = selectionStart;
}

app();