console.log('Loaded!');

// Change text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//Move the image to the right
var img = document.getElementById('madi');
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
    
};
