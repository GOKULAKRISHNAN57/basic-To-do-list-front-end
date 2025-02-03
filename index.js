function todo() {
    var input_side = document.getElementById("in").value.trim();  

    if (input_side === "") {  
        document.getElementById("in").setAttribute("placeholder", "Write Your To-do List");
        return;
    }

    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete_button"; 

    var todo = document.createElement("h1");
    todo.className = "lists";
    todo.innerText = input_side;
    var unique_id = "todo_id" + Date.now();
    todo.id = unique_id;

    var div = document.createElement("div"); 
    div.appendChild(todo);
    div.appendChild(btn);
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.padding = "10px";
    div.style.borderBottom = "2px solid grey";

    document.getElementById("to").appendChild(div);
    document.getElementById("to").style.backgroundColor = "rgb(233, 215, 194)";
    document.getElementById("to").style.border = "solid black 5px";


    btn.onclick = function () {
        div.remove();
    };

    document.getElementById("in").value = "";
}
