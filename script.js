const meta = document.querySelector('#theme-color-meta');

function setThemeColor(color) {
    meta.setAttribute('content', color);
}

setThemeColor('#000000');