const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


//FORMULAIRE
const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');

signupButton.addEventListener('click', () => {
    container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
    container.classList.remove('panel-active');
})






