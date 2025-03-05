const popup = document.getElementById('share-popup');
const shareButton = document.getElementById('share-button');
const mobileShareClose = document.getElementById('mobile-share-button');
const author = document.getElementById('author');

shareButton.addEventListener('click', (e) => {
  if (!popup.style.display || popup.style.display === 'none') {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
  // let cardWidth = document.getElementById('card').offsetWidth;
  // if (cardWidth <= 376) {
  //   author.style.display = 'none';
  // }
});

mobileShareClose.addEventListener('click', (e) => {
  popup.style.display = 'none';
  author.style.display = 'flex';
});
