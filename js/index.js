let links = document.querySelectorAll(`a`);
let auxFun = document.querySelector(`body`);
let sign = document.querySelectorAll(`.btn`);
let divFocus = document.querySelector(`.text-content`);
let nav = document.querySelector('.nav')

//mouseover
let navArr = Object.values(`.nav`)
for (let i = 0; i < navArr.length; i++) {
    links[i].addEventListener(`mouseover`, function(event) {
        event.target.style.color = 'red';
        setTimeout(function() {
            event.target.style.color = '';
        }, 500)
    }, false);
}

//DOMcontentloaded
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//scaleable zoom on banner pic
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.525, scale), 4);
    zoomPic.style.transform = `scale(${scale})`;
}
let scale = 1;
let zoomPic = document.querySelector(`div img`);
zoomPic.onwheel = zoom;

//changes text color with auxClick
function random(number) { return Math.floor(Math.random() * number) }

function randomColor() { return `rgb(${random(255)},${random(255)},${random(255)})`; }

auxFun.onauxclick = function(e) {
    e.preventDefault();
    auxFun.style.color = randomColor();
}

auxFun.oncontextmenu = function(e) { e.preventDefault(); }

//click to change button color to orange. also added mouseout to log
Array.from(sign).forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.style.background = `orange`;
    });
    elem.addEventListener(`mouseout`, () => {
        console.log(`moused out!`);
    })
}, true);

//click to log target clicks and to add stopPropagation
Array.from(document.all).forEach((elem) => {
    elem.addEventListener(`click`, function(event) {
        console.log(`target`, event.target);
        console.log(`current target`, event.currentTarget);
        console.log(`\n`);
        event.stopPropagation();
    })
});

//focus FIX


links.addEventListener('focus', function (event){
    nav.style.background = 'red';
});

//blur FIX
links.onfocus.addEventListener(`blur`, (event) => {
    event.target.style.background = '';
});

// double click
//add a color class maybe
nav.classList.add('color off')



document.addEventListener('dblclick', function (event){
    nav.classList.remove('off')
})