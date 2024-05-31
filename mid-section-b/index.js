const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const galleryImage = document.getElementById('gallery-image');

let currentImage = 1;
let currentImageString= "one";
function updateImage() {
  galleryImage.src = `./${currentImageString}.svg`;
}

prevBtn.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 1) {
    currentImage = 4; 
  }
  convert();
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentImage++;
  if (currentImage > 4) {
    currentImage = 1;
  }
  convert();
  updateImage();
});

function convert(){
    if(currentImage==4){
        currentImageString="four";
    }
    if(currentImage==2){
        currentImageString="two";
    }
    if(currentImage==1){
        currentImageString="one";
    }
    if(currentImage==3){
        currentImageString="three";
    }
}
updateImage();