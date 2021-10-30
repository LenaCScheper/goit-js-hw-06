const form = document.querySelector('.login-form');

form.login-form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
if(val.length>5){
    alert("Недопустимая длина строки");
    document.search.reset();
    event.preventDefault();
}   
else
    alert("Отправка разрешена");
}
