console.log('Loaded!');

// Change text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//Move the image to the right
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveLeft, 100);
    
};
