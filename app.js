// Declare Variables
const containerSlider = document.querySelector('.container-slide');
const sliderImages = document.querySelector('.slider-images');
const nextbtn = document.querySelector('#nextbtn');
const prevbtn = document.querySelector('#prevbtn');
const myImages = document.querySelector('.my-images')
const images = ['img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];

let count = 0;

//  Add Event Listener
prevbtn.addEventListener('click', function() {
    if (count <= 0) count = images.length;
    count--;
    // return setImg();
    myImages.setAttribute('src', 'images/' + images[count]);


})


nextbtn.addEventListener('click', function() {
    if (count >= images.length - 1) count = -1;
    count++;
    // return setImg();
    myImages.setAttribute('src', 'images/' + images[count]);
})


// function setImg() {
//     return myImages.setAttribute('src', 'images/' + images[count]);
// }