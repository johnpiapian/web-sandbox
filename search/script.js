function print(val){console.log(val);}

function replaceGlobally(original, searchTxt, replaceTxt) {
    const regex = new RegExp(searchTxt, 'g');
    return original.replace(regex, replaceTxt) ;
}

function searchHandler(){

    let searchText = document.getElementById('search-field').value;
        searchText = encodeURIComponent(searchText);

    let content = document.getElementById('content');
    
    if(searchText.trim() != ''){
        let final = replaceGlobally(content.innerHTML.replace(/<\/?mark[^>]*>/g,''), searchText, `<mark>${searchText}</mark>`);
        content.innerHTML = final;
    }else{
        let final = content.innerHTML.replace(/<\/?mark[^>]*>/g,'');
        content.innerHTML = final;
    }

}


function app(){
    document.getElementById('search-button').onclick = searchHandler;
    document.getElementById('search-field').onkeyup = searchHandler;
}

app();