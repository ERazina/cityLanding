// здесь можно через querySelector для того чтобы продемонстрировать знания
// но getElementById быстрее
// а через querySelector было бы так let list = document.querySelector('#list');

// открытие - закрытие модального окна

let list = document.getElementById('list');
let modal = document.getElementById('modal');
let cancel = document.getElementById('cancel');
let cancelLink = document.getElementById('cancelLink');

list.addEventListener('click', () => {
    modal.classList.add('show');
});

cancel.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
});

cancelLink.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
});

// очистка полей формы
let form = document.getElementById('form');

form.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('close-button')){
       target.parentElement.firstElementChild.value = '';
       target.parentElement.classList.remove('errText');
       target.parentElement.firstElementChild.classList.remove('err');
       target.parentElement.classList.remove('noErrText');
       target.parentElement.firstElementChild.classList.remove('noErr');
    }
});

// валидация формы

let patternName = ('/\d/');
let submit = document.getElementById('submit');
let name = document.getElementById('name');
let email = document.getElementById('email');
let country = document.getElementById('country');
let checkbox = document.getElementById('cb');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    function validateEmail(element){
        let id = element.id;
        let val = element.value;
        let emailRegexp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

            if(val.match(emailRegexp)){
                element.classList.remove('err');
                element.parentElement.classList.remove('errText');
                element.classList.add('noErr');
                element.parentElement.classList.add('noErrText');
                if(element.parentElement.lastElementChild.classList.contains('show')){
                    element.parentElement.lastElementChild.classList.remove('show');
                    element.parentElement.lastElementChild.classList.add('hide');
                }
                

            }
            else{
                element.classList.remove('noErr');
                element.parentElement.classList.remove('noErrText');
                element.classList.add('err');
                element.parentElement.classList.add('errText');
                element.parentElement.lastElementChild.classList.add('show');
            }
    }
    function validateName(element){
        let id = element.id;
        let val = element.value;
        let nameRegexp = /^[A-Za-zа-яА-Я-\s]*$/i;

            if(val.match(nameRegexp) && val !== ''){
                element.classList.remove('err');
                element.parentElement.classList.remove('errText');
                element.classList.add('noErr');
                element.parentElement.classList.add('noErrText');
                console.log(element.parentElement.lastElementChild);
                if(element.parentElement.lastElementChild.classList.contains('show')){
                    element.parentElement.lastElementChild.classList.remove('show');
                    element.parentElement.lastElementChild.classList.add('hide');
                }
            }
            else{
                element.classList.remove('noErr');
                element.parentElement.classList.remove('noErrText');
                element.classList.add('err');
                element.parentElement.classList.add('errText');
                element.parentElement.lastElementChild.classList.add('show');
            }
    }

    function validateSelect(element){
        let val = element.value;
        if(element.value !== 'Select your country'){
            console.log('Country Selected');
        }
        else{
            // должен возникать тултип
            console.log('Select your cointry');
            }
    }


    function validateCheck(element){
        if(element.checked){
            console.log('checkbox checked');
        }
        else{
            console.log('Check the form');
            }
    }

    validateEmail(email);
    validateName(name);
    validateSelect(country);
    validateCheck(checkbox);

});
