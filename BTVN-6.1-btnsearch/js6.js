function addItem(){
    // const add = document.getElementsByName("add")[0];
    const add =  $("[name=add]")[0];
    const listSb = document.getElementById("sidebar");
    
    const newItem = document.createElement('a');
    newItem.href = "#";
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = add.value;
    listSb.appendChild(newItem);
    add.value = "";
}

function changeColor(color, id) {
    $(`#item-${id} .card-body`).removeClass(`gray white gold orange red green blue black greenyellow`);
    $(`#item-${id} .card-body`).addClass(`${color}`);
}