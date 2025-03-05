const popup = document.getElementById('share-popup');
const shareButton = document.getElementById('share-button');
const mobileShareClose = document.getElementById('mobile-share-button');

shareButton.addEventListener('click', (e) => {
  if (!popup.style.display || popup.style.display === 'none') {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
});

mobileShareClose.addEventListener('click', (e) => {
  popup.style.display = 'none';
});
