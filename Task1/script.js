const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;
const galleryItems = Array.from(images);

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    currentIndex = i;
    openLightbox(images[i].src);
  });
}

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryItems.length - 1;
  if (currentIndex >= galleryItems.length) currentIndex = 0;
  lightboxImg.src = galleryItems[currentIndex].src;
}

function filterImages(category) {
  const gallery = document.getElementById('gallery');
  const items = document.querySelectorAll('.gallery-item');
  const text = document.getElementById('text');

  gallery.style.display = 'grid';
  text.style.display = 'none';

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
