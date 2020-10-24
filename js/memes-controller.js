'use strict';
var gCanvas;
var gCtx;

function onInit() {
    renderGallery()
}

function onOpenCanvas(url, id) {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    document.querySelector('.canvas-container').classList.remove('hide')
    document.querySelector('.gallery-area').classList.add('hide')
    onSetImg(url, id)
    renderStickers()
}


function onSetImg(src, id) {
    restartLines()
    renderCanvas(src, id)
}

function onRenderTextInput(txt) {
    const input = document.querySelector('input')
    input.value = txt
}

function onGetText(newTxt) {
    var newTxt = document.querySelector('[name=text]').value.toUpperCase();
    updateText(newTxt)
    renderCanvas()
}

function renderCanvas(src, id) {
    if (id && id !== gMeme.selectedImgId) {
        setCurrImageId(id)
        return drawImg(src)
    }
    const imgId = getMeme().selectedImgId;
    const img = getImgById(+imgId);
    drawImg(img.url)
}

function drawImg(src) {

    const lines = getLines()
    const stickers = getStickers()
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        lines.forEach(line => {
            drawText(line, line.txt.toUpperCase(), line.posX, line.posY)
        })
        stickers.forEach(sticker => {
            if (sticker.isOnCanvas) onPutSticker(sticker.url, sticker.id)
        })
        if (!getMeme().isToDownload) {
            onDrawMarkRect()
        }
    }
}

function onDownloadCanvas(elLink) {
    getMeme().isToDownload = true;
    const lines = getLines()
    lines.forEach(line => {
        line.isCurrLine = false;
    })
    renderCanvas()
    setTimeout(function () {
        var imgContent = gCanvas.toDataURL('image/png');
        elLink.href = imgContent
    }, 10);
}

function drawText(line, text, x = getPosX, y = getPosY) {

    gCtx.strokeStyle = `${line.stroke}`
    gCtx.fillStyle = `${line.color}`
    gCtx.lineWidth = '2'
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = `${line.align}`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetFontSize(diff) {
    updateFontSize(diff)
    renderCanvas()
}

function onChangeTextPos(diff) {
    updateTextLoc(diff)
    renderCanvas()
}

function onSwitchLines(diff) {
    switchLines(+diff)
    let line = getLine();
    let lines = getLines()
    lines.forEach(line => {
        !line.isCurrLine
    })
    line.isCurrLine
    renderCanvas()
    onRenderTextInput(line.txt)
}

function onAddLine() {
    addLine()
    renderCanvas()
}

function onGetMarkSize(line) {
    const textHeight = line.size;
    const textWidth = gCtx.measureText(line.txt).width
    const markSize = { x: line.posX, y: line.posY, width: textWidth, height: textHeight }
    return markSize;
}

function onDrawMarkRect() {
    let line = getLine()
    if (typeof line === "undefined") {
        setCurrLineIdx(0)
        line = getLine()
        if (getLines().length === 0) return
    }
    const markSize = onGetMarkSize(line);
    if (getLines()[getSelectedLineIdx()] !== line) return
    line.isCurrLine = true;
    gCtx.beginPath();
    gCtx.rect(0, markSize.y - markSize.height, gCanvas.width, markSize.height + 10);
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = '1'
    gCtx.stroke()
    gCtx.fillStyle = '#ffffff1e'
    gCtx.fill()
}

function onDeleteLine() {
    deleteLine()
    renderCanvas()
}

function onSetFontFamily(font) {
    setFontFamily(font)
    renderCanvas()
}

function onSetTextColor(color) {
    setTextColor(color)
    renderCanvas()
}

function onSetAlign(align) {
    setAlign(align)
    renderCanvas()
}

function onGetLineToDrag(ev) {
    var lines = getLines();
    lines.forEach((line, i) => {
        if (ev.offsetX > gCtx.measureText(line.txt).width && ev.offsetY > line.posY) {
            setCurrLineIdx(i)
            line.isCurrLine = true;
            line.isToDrag = true;
            renderCanvas();
        }
    })
}

function onDragLine(ev) {
    if (getLine().isToDrag) {
        dragLine(ev.offsetX, ev.offsetY);
        renderCanvas();
    }
}

function onMouseReleased() {
    renderCanvas();
    var lines = getLines()
    lines.forEach(line => {
        line.isCurrLine = false
        line.isToDrag = false
    })
}