'use strict';

function onInit() {
    init()
    renderGallery()
}

function onSetImg(src, id) {
    drawImg(src, id)
}

function onRenderTextInput(txt) {
    let input = document.querySelector('input')
    input.value = txt
}

function onGetText(ev) {
    let line = getLine()
    // txt.preventDefault();
    var txt = document.querySelector('[name=text]').value.toUpperCase();
    onRenderTextInput(txt)
    renderCanvas()
    drawText(txt, line.x, line.y)
}


function draw(ev) {
    console.log(ev);
}

function setFontSize(diff) {
    updateFontSize(diff)
    renderCanvas()
}