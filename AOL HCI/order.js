const toggle = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle("active");
});


const form = document.getElementById('form');
const size = document.getElementById('size');
const username = document.getElementById('name');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if (document.querySelectorAll('.success').length === 3) {
        form.submit();
    } 
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const nameValue = username.value.trim();
    const sizeValue = size.value.trim();
    const addressValue = address.value.trim();

    if(nameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(sizeValue === '') {
        setError(size, 'Size is required');
    } else if (sizeValue < 35 || sizeValue > 47) {
        setError(size, 'Available sizes are only 35-47');
    } else {
        setSuccess(size);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

};