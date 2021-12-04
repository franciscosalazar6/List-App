let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('items');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-presents').value;
    row.insertCell(1).innerHTML = document.getElementById('typeNumber').value;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-presents').value = '';
    document.getElementById('typeNumber').value = '';
}); 

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove from List';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}