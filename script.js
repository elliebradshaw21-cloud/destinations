// --- All slideshow images for all countries ---

const slideshowImages = {
  spain: [
    "images/spain1.jpeg",
    "images/spain2.jpeg",
    "images/spain3.jpeg",
    "images/spain4.jpeg"
  ],
  italy: [
    "images/italy1.jpeg",
    "images/italy2.jpeg",
    "images/italy3.jpeg",
    "images/italy4.jpeg"
  ],
  france: [
    "images/france1.jpeg",
    "images/france2.jpeg",
    "images/france3.jpeg",
    "images/france4.jpeg"
  ],
  germany: [
    "images/germany1.jpeg",
    "images/germany2.jpeg",
    "images/germany3.jpeg",
    "images/germany4.jpeg"
  ],
  portugal: [
    "images/portugal1.jpeg",
    "images/portugal2.jpeg",
    "images/portugal3.jpeg",
    "images/portugal4.jpeg"
  ],
  poland: [
    "images/poland1.jpeg",
    "images/poland2.jpeg",
    "images/poland3.jpeg",
    "images/poland4.jpeg"
  ],
  japan: [
    "images/japan1.jpeg",
    "images/japan2.jpeg",
    "images/japan3.jpeg",
    "images/japan4.jpeg"
  ],
  dubi: [
    "images/dubi1.jpeg",
    "images/dubi2.jpeg",
    "images/dubi3.jpeg",
    "images/dubi4.jpeg"
  ],
  greece: [
    "images/greece1.jpeg",
    "images/greece2.jpeg",
    "images/greece3.jpeg",
    "images/greece4.jpeg"
  ],
  switzerland: [
    "images/switzerland1.jpeg",
    "images/switzerland2.jpeg",
    "images/switzerland3.jpeg",
    "images/switzerland4.jpeg"
  ]
};


// --- Reusable slideshow setup function ---

function setupSlideshow(country) {
  const images = slideshowImages[country];
  let index = 0;

  const imgElement = document.querySelector(`#${country} .slideshow img`);
  const nextBtn = document.querySelector(`#${country} .slideshow .right`);
  const prevBtn = document.querySelector(`#${country} .slideshow .left`);

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
  });
}


// --- Activate slideshows for ALL countries automatically ---

Object.keys(slideshowImages).forEach(country => {
  setupSlideshow(country);
});