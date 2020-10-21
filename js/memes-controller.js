'use strict';

function onInit() {
    init()
}

function onSetImg(src, id) {
    drawImg(src, id)
}

function onRenderTextInput(txt) {
    let input = document.querySelector('input')
    input.value = txt
}

function onGetText(txt) {
    txt.preventDefault();
    txt = document.querySelector('[name=text]').value.toUpperCase();
    renderCanvas(txt)
    // updateLines(txt)
    drawText(txt, 100, 57)
}

function updateSettings(txt) {
    const line = getLine();
    line.txt = txt
    gCtx.strokeStyle = line.color;
    gCtx.font = `${line.size}px ${gFont}`
    gCtx.textAlign = line.align;
}

function draw(ev) {
    console.log(ev);
}

function setFontSize(diff) {
    const line = getLine()
    line.font += diff
    renderCanvas()
}