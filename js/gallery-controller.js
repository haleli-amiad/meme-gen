'use strict';

function renderGallery() {
    var pics = getImgsForDisplay()
    if (pics.length === 0) {
        pics = getPics()
    }
    var strHtmls = pics.map(function (pic) {
        return `
 <img class="gallery-img" id="${pic.id}" src="img/meme-img/${pic.id}.jpg" alt="" onclick="onOpenCanvas(this.src, this.id)">
        `}).join('')
    document.querySelector('.gallery').innerHTML = strHtmls
}

function onSetFilter() {
    const filterBy = document.querySelector('[name=search-choices]').value
    setFilter(filterBy)
    renderGallery();
}