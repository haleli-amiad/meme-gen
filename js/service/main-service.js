'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };
var gImgs = [
    { id: 1, url: 'img/meme-img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/meme-img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/meme-img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/meme-img/4.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'change this',
            size: 48,
            align: 'left',
            color: 'white',
            posX: 100,
            posY: 50,
        }
        // {
        //     txt: 'lala',
        //     size: 25,
        //     align: 'left',
        //     color: 'white',
        //     posX: 150,
        //     posY: 280,
        // }
    ]
};

function setCurrImageId(id) {
    gMeme.selectedImgId = id
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

function getImgById(id) {
    var img = gImgs.find((img) => img.id === +id);
    console.log(img);
    return img;
}

