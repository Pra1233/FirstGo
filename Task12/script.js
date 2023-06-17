const btn=document.querySelector('.btn');
//Click
    btn.addEventListener('click',onSubmit);
    // After clicking on btn delete before localstorage 
     function onSubmit(e){
        let del=localStorage.getItem('key');
        localStorage.removeItem(del);
    localStorage.removeItem('detail');

    let name=document.querySelector('#name').value;
     let email=document.querySelector('#email').value;
      // console.log(name.value);
      if(name==='' || email===''){
        alert('Please Enter Details');
      }
      else{
      // Local storage
      let detail={
        name:name,
        email:email
      };
      let ans=JSON.stringify(detail);
      
      localStorage.setItem('key',ans);
      console.log(localStorage.getItem('key'));

// Printing on screen
      let ul= document.getElementById('items');  
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(ans));
    ul.appendChild(li);

      }

     }