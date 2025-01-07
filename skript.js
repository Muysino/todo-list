
function add(event) {

    let input = document.getElementById('input');
    let ui = document.getElementById('ul')
   

 if ( (event.key === 'Enter' || event.type === 'click') && input.value.trim() ){
    ul.innerHTML += `<li> ${input.value} </li>`;
    input.value = '';
 }
 
    

}

