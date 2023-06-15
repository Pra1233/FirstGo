//     console.log(document.domain);
//     console.log(document.body);
//     console.log(document.head);
//     console.log(document.all);
// console.log(document.forms);
// console.log(document.forms[0]);

// document.getElementById('item');
let a=document.getElementById('itemlist');
a.innerText="HELLO";
a.innerHTML='<h2>THIS IS OUR TITLE <h2/>';//put inside not change
a.style.color="blue";
a.style.borderBottom="solid 3px black";//camelcase

 var list=document.getElementsByClassName('list-group-item');
 list[0].style.color='green';
 list[1].style.color='green';
 list[2].style.color='green';

 list[0].style.fontWeight='bold';
 list[1].style.fontWeight='bold';
 list[2].style.fontWeight='bold';

list[2].style.backgroundColor='greenyellow';
// list[1].style.color='green';
// list.style.color='green';
// list[1].style.backgroundColor='yellow';
// for(var i=0;i<list.length();i++){
//     list[i].style.color='green';
// }