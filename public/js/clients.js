var d = document;

var thumnailWrapper = d.querySelector('.thumbnail-wrapper');
var thumbnails = d.querySelectorAll('.thumbnail'); 
var tWidth = thumbnails[0].width; 

var mainImg = d.querySelector('.main-img');
for(var i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(e) {
        mainImg.src = e.target.src;
    });
}


var left = d.querySelector('.left-arw');
var right = d.querySelector('.right-arw');

left.addEventListener('click', function(e) {
    console.log('left')
    thumnailWrapper.scrollLeft -= tWidth;
});

right.addEventListener('click', function(e) {
    console.log('right')
    thumnailWrapper.scrollLeft += tWidth;
});


