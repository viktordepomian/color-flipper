// https://www.vanillajavascriptprojects.com/

const BODY = document.body;
const CURRENTCOLOR = document.querySelector('#current-color');
const CHANGECOLORBTN = document.querySelector('#change-color');


function outputColor(){
    let color = randomColor();
    BODY.style.backgroundColor = color;
    CURRENTCOLOR.textContent = color;
};

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


CHANGECOLORBTN.addEventListener('click', function(){
    outputColor();
});