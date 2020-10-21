'use strict';

function renderGallery() {
    var pics = getPics()
    var strHtmls = pics.map(function (pic) {
        return `
 <img class="gallery-img" id="1" src="img/meme-img/${pic.id}.jpg" alt="" onclick="onSetImg(this.src, this.id)">
        `}).join('')
    document.querySelector('.gallery').innerHTML = strHtmls
}