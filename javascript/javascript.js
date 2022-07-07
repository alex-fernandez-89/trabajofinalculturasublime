//variables//
let modal = document.querySelector('.modal');
let images = document.querySelectorAll('.gallery img');
let modalimg = document.querySelector('#mymodal');
let imgbox = document.querySelectorAll('.list img');
let caption = document.querySelector('.caption-text');
let close = document.querySelector('.close');

images.forEach((images)=>{
    images.addEventListener('click', () => {
        modal.style.display = "block";
        modalimg.src = images.src;
        caption.innerHTML = images.alt;
    });
});
imgbox.forEach(img => img.addEventListener('click', imglightbox));
function imglightbox (event){
    modalimg.src = event.target.src;
}
close.addEventListener('click', () =>{
    modal.style.display = "none"
})