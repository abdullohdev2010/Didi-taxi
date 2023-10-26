let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let uz = document.querySelector('.uz');
let ru = document.querySelector('.ru');
let eng = document.querySelector('.eng');
let nav_b = document.querySelector('.nav_b');
let href = document.querySelector('.href');


const til ={
    'bosh sahifa': {
        'uz': 'Bosh sahifa',
        'ru': 'роов',
        'eng': 'Home'
    }
}
b1.addEventListener('click', function() {
    nav_b.innerTEXT = 'salo'
    href.appendChild(nav_b)
})