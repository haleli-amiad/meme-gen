'use strict';

var gImgs = [
    { id: 1, url: 'img/meme-img/1.jpg', keywords: ['all', 'happy', 'friends'] },
    { id: 2, url: 'img/meme-img/2.jpg', keywords: ['all', 'happy', 'friends'] },
    { id: 3, url: 'img/meme-img/3.jpg', keywords: ['all', 'friends'] },
    { id: 4, url: 'img/meme-img/4.jpg', keywords: ['all', 'angry'] },
    { id: 5, url: 'img/meme-img/5.jpg', keywords: ['all', 'sad'] },
    { id: 6, url: 'img/meme-img/6.jpg', keywords: ['all', 'shock', 'friends'] },
    { id: 7, url: 'img/meme-img/7.jpg', keywords: ['all', 'sad', 'shock'] },
    { id: 8, url: 'img/meme-img/8.jpg', keywords: ['all', 'happy', 'love', 'family'] },
    { id: 9, url: 'img/meme-img/9.jpg', keywords: ['all', 'angry'] },
    { id: 10, url: 'img/meme-img/9.jpg', keywords: ['all', 'happy', 'shock'] },
    { id: 11, url: 'img/meme-img/10.jpg', keywords: ['all', 'angry', 'shock'] },
    { id: 12, url: 'img/meme-img/10.jpg', keywords: ['all', 'family', 'shock'] },
    { id: 13, url: 'img/meme-img/11.jpg', keywords: ['all', 'friends', 'happy', 'sad'] },
    { id: 14, url: 'img/meme-img/12.jpg', keywords: ['all', 'angry', 'friends'] },
    { id: 15, url: 'img/meme-img/13.jpg', keywords: ['all', 'happy', 'friends', 'love'] },
    { id: 16, url: 'img/meme-img/14.jpg', keywords: ['all', 'happy', 'friends', 'love'] },
    { id: 17, url: 'img/meme-img/15.jpg', keywords: ['all', 'happy', 'friends', 'love'] },
    { id: 18, url: 'img/meme-img/16.jpg', keywords: ['all', 'happy', 'friends', 'love'] },
];
var gFilterBy = 'all'
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    isToDownload: false,
    lines: [
        {
            txt: 'change this',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 0,
            posY: 50,
            isCurrLine: false,
            isToDrag: false
        },
        {
            txt: 'change that',
            font: 'impact',
            size: 48,
            align: 'center',
            stroke: 'black',
            color: 'white',
            posX: 0,
            posY: 310,
            isCurrLine: false,
            isToDrag: false
        }
    ]
};

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
    if (getLines().length > 2) return;
    const line = {
        txt: 'change it!',
        font: 'impact',
        size: 48,
        align: 'center',
        stroke: 'black',
        color: 'white',
        posX: 300,
        posY: 180,
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
            posY: 300,
            isCurrLine: false
        }
    ]
    return gMeme
}

function deleteLine() {
    var line = gMeme.selectedLineIdx;
    gMeme.lines.splice(line, 1)
}

function setFontFamily(font) {
    let line = getLine()
    line.font = font
}

function setTextColor(color) {
    let line = getLine()
    line.color = color
}

function setAlign(align) {
    const line = getLine();
    var posX;
    switch (align) {
        case 'right':
            posX = gCanvas.width;
            break;
        case 'center':
            posX = gCanvas.width / 2;
            break;
        case 'left':
            posX = 0;
            break;
    }
    line.align = align;
    line.posX = posX;
}

function dragLine(x, y) {
    var line = getLine()
    line.posX = x;
    line.posY = y;
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function getImgsForDisplay() {
    if (gFilterBy === 'all') return gImgs;
    var res = gImgs.filter(img => img.keywords.includes(gFilterBy))
    return res;
}