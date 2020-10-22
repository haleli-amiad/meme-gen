'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };
var gImgs = [
    { id: 1, url: 'img/meme-img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/meme-img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/meme-img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/meme-img/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/meme-img/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/meme-img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/meme-img/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/meme-img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/meme-img/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/meme-img/9.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/meme-img/10.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/meme-img/10.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/meme-img/11.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/meme-img/12.jpg', keywords: ['happy'] },
    { id: 15, url: 'img/meme-img/13.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/meme-img/14.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/meme-img/15.jpg', keywords: ['happy'] },
    { id: 18, url: 'img/meme-img/16.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'change this',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 450,
            posY: 50,
            isCurrLine: true
        },
        {
            txt: 'change that',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 200,
            posY: 310,
            isCurrLine: false
        }
    ]
};

//google how to find height and width of text with canvas

function getPics() {
    return gImgs
}

function setCurrLineIdx(idx) {
    gMeme.selectedLineIdx = +idx;
}

function setCurrImageId(id) {
    gMeme.selectedImgId = +id
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getLines() {
    return gMeme.lines
}

function getMeme() {
    return gMeme;
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function getImgById(id) {
    var img = gImgs.find((img) => img.id === id);
    return img;
}

function updateFontSize(diff) {
    return gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function getFont() {
    return gMeme.lines[gMeme.selectedLineIdx].font;
}

function getFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}

function getAlign() {
    return gMeme.lines[gMeme.selectedLineIdx].align;
}

function getFillColor() {
    return gMeme.lines[gMeme.selectedLineIdx].color;
}

function getPosX() {
    return gMeme.lines[gMeme.selectedLineIdx].posX;
}

function getPosY() {
    return gMeme.lines[gMeme.selectedLineIdx].posY;
}

function updateTextLoc(diff) {
    return gMeme.lines[gMeme.selectedLineIdx].posY += diff;
}

function getMemeText() {
    return getLine().txt;
}

function updateText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function switchLines(diff) {
    if (gMeme.selectedLineIdx + diff >= gMeme.lines.length) {
        gMeme.selectedLineIdx = -1;
    }
    return gMeme.selectedLineIdx += +diff;
}

function addLine() {
    let line = {
        txt: 'change it!',
        font: 'impact',
        size: 48,
        align: 'center',
        stroke: 'black',
        color: 'white',
        posX: 300,
        posY: 170,
        isCurrLine: false
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function restartLines() {
    gMeme.lines = [
        {
            txt: 'change this',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 300,
            posY: 60,
            isCurrLine: true
        },
        {
            txt: 'change that',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 300,
            posY: 310,
            isCurrLine: false
        }
    ]
    return gMeme
}