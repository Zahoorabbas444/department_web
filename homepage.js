var images = document.querySelectorAll('.section-hod-img');
images.forEach(function (image) {
    image.addEventListener('mousemove', moveImageForward);
});

function moveImageForward(event) {
    var image = event.target.querySelector('#moving-image');
    image.style.transform = 'translateZ(50px)';
}