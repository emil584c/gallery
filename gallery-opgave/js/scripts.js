const filterButtons = document.querySelectorAll('.filter-button');
const galleryImage = document.querySelectorAll('.gallery-image');
const clickedImageContainer = document.querySelector('.clicked-image-container');
const closeBtn = document.querySelector('.close-button');
const clickedImage = document.querySelector('.clicked-image img');


// Filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    
    const category = button.getAttribute('data-filter');
    
    galleryImage.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Replace clicked image
galleryImage.forEach(item => {
  item.addEventListener('click', () => {
    clickedImage.src = item.querySelector('img').src;
    clickedImageContainer.style.display = 'flex';
  });
});

// Clicked image close button
closeBtn.addEventListener('click', () => {
  clickedImageContainer.style.display = 'none';
});