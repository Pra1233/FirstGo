var btn=document.querySelector('#btn');  
 btn.addEventListener('click',onAdd);

 var items=document.querySelector('.items');
 items.addEventListener('click',DeleteItem); //Delete
 items.addEventListener('click',EditItem);  //Edit

 function onAdd(e){
    e.preventDefault();
    // let items=document.querySelector('.items');
    let amount=document.querySelector('.amount').value;
let description=document.querySelector('.description').value;
 let category=document.querySelector('.category').value;

let li=document.createElement('li');
li.className="list-group-item";
li.appendChild(document.createTextNode(amount+"- "+description+"- "+category));
items.appendChild(li);

// //LocalStorage
// // const amountl=e.target.amo;
// // const descriptionl=e.target.description;
// localStorage.setItem('Amount',amount);
// localStorage.setItem('Description',description);

let obj={
    'Amount':amount,
    'Description':description,
    'Category':category,
}
let objstring=JSON.stringify(obj);
localStorage.setItem('li',objstring);
console.log(localStorage.getItem('li'));


//    Add DeleteExpense button
let deleteExpense=document.createElement('button');
deleteExpense.className="btn btn-danger btn-sm float-right delete";
deleteExpense.appendChild(document.createTextNode('Delete Expenses'));
li.appendChild(deleteExpense);

// Creating EDIT Expenses
let EditExpense=document.createElement('button');
EditExpense.className="btn btn-success btn-sm float-right edit ";
EditExpense.textContent="Edit Expenses";
li.appendChild(EditExpense);

 }

function DeleteItem(e){
 if(e.target.classList.contains('delete')){
    if(confirm('Are You sure ?')){
        var li=e.target.parentElement;
        items.removeChild(li);
        // Delete from localstorage
        localStorage.removeItem('li');
    }
 }
}

function EditItem(e){
    if(e.target.classList.contains('edit')){
        var li=e.target.parentElement;
        items.removeChild(li);
    }
}
