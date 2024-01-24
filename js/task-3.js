 
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input',  handleSubmit);

function  handleSubmit(){
    const greeting = nameInput.value.trim();
  
    if(greeting ===''){
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = greeting;
    }
}
    

           