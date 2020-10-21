'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function renderCanvas() {
    // debugger
    // updateLines(txt);
    let line = getLine()
    const imgId = getMeme().selectedImgId;
    const img = getImgById(imgId);
    // console.log(img);
    // console.log(imgId);
    drawImg(img.url, imgId)
    drawText(line.txt.toUpperCase(), line.posX, line.posY)
}

function drawImg(src, id) {
    // console.log(id);
    // console.log(gMeme.selectedImgId);
    if (id !== gMeme.selectedImgId) {
        // debugger
        var line = gMeme.lines[0]
        // console.log(line);
        line.txt = 'change This'
        // console.log(line.txt);
        drawText(line.txt.toUpperCase(), line.posX, line.posY)
    };
    setCurrImageId(id)
    // console.log(src, id);
    var img = new Image()
    const lines = getLines();
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        lines.forEach(line => {
            drawText(line.txt.toUpperCase(), line.posX, line.posY)
            // console.log(line.txt.toUpperCase());
            onRenderTextInput(line.txt.toUpperCase())
        })
        // var text = gMeme.lines[0].txt

    }
}

function drawText(text, x = getPosX, y = getPosY) {
    // debugger
    let line = getLine()
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${getFillColor()}`
    gCtx.lineWidth = '3'
    gCtx.font = `${getFontSize()}px ${getFont()}`;
    gCtx.textAlign = `${getAlign()}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    line.txt = text
}