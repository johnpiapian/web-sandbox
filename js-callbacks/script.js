function createPost(obj, showpost){

    let node = document.createElement("p");
    let textnode = document.createTextNode("Water");

    node.appendChild(textnode);

    obj.body = node;

    if(typeof showpost == 'function'){
        showpost(obj);
    }
}


createPost({ 'id': 'content', 'body': 'hello world'}, function(req){
    if(req){
        document.getElementById(req.id).appendChild(req.body);
    }else{
        console.log("No data!");
    }
    
});