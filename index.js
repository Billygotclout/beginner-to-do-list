const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const activity = document.querySelector('#activity');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onSubmit)


function onSubmit(e){
e.preventDefault()

if (nameInput.value === '' || activity.value === '') {
    msg.classList.add('error');

    msg.innerHTML = "* Please Enter Fields"
} else {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value} : ${activity.value} `));

    userList.appendChild(li);

    nameInput.value = '' ;
     activity.value = '';
    
}
}