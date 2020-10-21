'use strict';


var gCanvas;
var gCtx;
var gCurrShape = 'triangle'

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}
drawImg2()

function drawImg2() {
    var img = new Image()
    img.src = '..img/meme-img/arthur.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}