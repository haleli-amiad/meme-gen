'use strict';

function renderStickers() {
    var stickers = getStickers()
    var strHtmls = `<h1 class="stickers-title">Stickers</h1><br>`
    strHtmls += stickers.map(function (sticker) {
        return `
 <img class="sticker-img" id="${sticker.id}" src="img/stickers-img/${sticker.id}.png" alt="" onclick="onPutSticker(this.src, this.id)">
        `}).join('')
    strHtmls += `<div class="stickers-controller"> <button class="pref-button btn" onclick="onSwitchSticker(1)"><img src="img/site-img/text-switch.png" class="arrow" alt=""></button>
    <button class="pref-button text-plus-btn" onclick="onSetStickerSize(1)"><img src="img/site-img/text-plus.png" class="arrow" alt=""></button>  
    <button class="pref-button btn" onclick="onDeleteSticker()"><img src="img/site-img/delete-btn.png" class="arrow" alt=""></button>
    <button class="pref-button text-minus-btn" onclick="onSetStickerSize(-1)"><img src="img/site-img/text-minus.png" class="arrow" alt=""></button> 
  <button class="pref-button btn" onclick="onChangeStickerPosY(3)"><img src="img/site-img/text-down.png" class="arrow" alt=""></button>
                  <button class="pref-button text-up-btn" onclick="onChangeStickerPosY(-3)"><img src="img/site-img/text-up.png" class="arrow" alt=""></button>  </div> `
    document.querySelector('.stickers-section').innerHTML = strHtmls
}

function onOpenStickers() {
    document.querySelector('.stickers-section').classList.toggle('hide')
}

function onPutSticker(src, id) {
    var chosenSticker = getStickerById(+id)
    gStickersOnCanvas.stickers.push(chosenSticker) // i know this line is pushing the sticker every time the canvas renders
    setCurrStickerId(id)
    chosenSticker.isOnCanvas = true;
    var sticker = new Image()
    sticker.src = src;
    sticker.onload = () => {
        gCtx.drawImage(sticker, chosenSticker.posX, chosenSticker.posY, chosenSticker.size, chosenSticker.size)
    }
}



function onSwitchSticker(diff) {
    switchStickers(+diff)
    // renderCanvas()
}
function onSetStickerSize(diff) {
    updateStickerSize(diff)
    renderCanvas()
}
function onDeleteSticker() {
    deleteSticker()
    renderCanvas()
}
function onChangeStickerPosY(diff) {
    updateStickerPosY(diff)
    renderCanvas()
}
