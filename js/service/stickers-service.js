'use strict';
var gStickers = [
    { id: 1, url: 'img/stickers-img/1.png', isOnCanvas: false, posX: 150, posY: 50, size: 100, isCurrSticker: false },
    { id: 2, url: 'img/stickers-img/2.png', isOnCanvas: false, posX: 190, posY: 50, size: 100, isCurrSticker: false },
    { id: 3, url: 'img/stickers-img/3.png', isOnCanvas: false, posX: 50, posY: 50, size: 100, isCurrSticker: false },
    { id: 4, url: 'img/stickers-img/4.png', isOnCanvas: false, posX: 20, posY: 50, size: 100, isCurrSticker: false },
    { id: 5, url: 'img/stickers-img/5.png', isOnCanvas: false, posX: 190, posY: 50, size: 100, isCurrSticker: false },
    { id: 6, url: 'img/stickers-img/6.png', isOnCanvas: false, posX: 110, posY: 50, size: 100, isCurrSticker: false },
    { id: 7, url: 'img/stickers-img/7.png', isOnCanvas: false, posX: 20, posY: 50, size: 100, isCurrSticker: false },
    { id: 8, url: 'img/stickers-img/8.png', isOnCanvas: false, posX: 150, posY: 50, size: 100, isCurrSticker: false },
    { id: 9, url: 'img/stickers-img/9.png', isOnCanvas: false, posX: 190, posY: 50, size: 100, isCurrSticker: false },
    { id: 10, url: 'img/stickers-img/10.png', isOnCanvas: false, posX: 110, posY: 50, size: 100, isCurrSticker: false },
    { id: 11, url: 'img/stickers-img/11.png', isOnCanvas: false, posX: 150, posY: 50, size: 140, isCurrSticker: false },
    { id: 12, url: 'img/stickers-img/12.png', isOnCanvas: false, posX: 20, posY: 50, size: 100, isCurrSticker: false },
];
var gSelectedStickerId = 0;
const gStickersOnCanvas = {
    selectedStickerIdx: 0,
    stickers: []
}

function getStickers() {
    return gStickers
}

function getStickersOnCanvas() {
    return gStickersOnCanvas;
}

function getStickerById(id) {
    var sticker = gStickers.find((sticker) => sticker.id === +id);
    return sticker;
}

function setCurrStickerIdx(idx) {
    gStickersOnCanvas.selectedStickerIdx = +idx;
}

function setCurrStickerId(id) {
    return gSelectedStickerId = +id;
}

function getSticker() {
    return gStickersOnCanvas[selectedStickerId]
}

function getStickerSize() {
    return gStickersOnCanvas.stickers[gStickersOnCanvas.selectedStickerIdx].size;
}

function updateStickerSize(diff) {
    return gStickersOnCanvas.stickers[gStickersOnCanvas.selectedStickerIdx].size += diff;
}

function switchStickers(diff) {
    if (gStickersOnCanvas.selectedStickerIdx + diff >= gStickersOnCanvas.stickers.length) {
        if (gStickersOnCanvas.stickers.length === 0) return
        gStickersOnCanvas.selectedStickerIdx = -1;
    }
    return gStickersOnCanvas.selectedStickerIdx += +diff;
}

function deleteSticker() {
    var sticker = gStickersOnCanvas.selectedStickerIdx;
    gStickersOnCanvas.stickers.splice(sticker, sticker)
}

function updateStickerPosY(diff) {
    return gStickersOnCanvas.stickers[gStickersOnCanvas.selectedStickerIdx].posY += diff;
}