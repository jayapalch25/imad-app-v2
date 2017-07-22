console.log('Loaded!');

// Change text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//Move the image to the right
var madi = document.getElementById('madi');
madi.onclick = function () {
    madi.style.marginleft = '100px';
};
