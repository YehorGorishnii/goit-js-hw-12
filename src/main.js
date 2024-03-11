import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from './js/render-functions.js';
import { findImage } from './js/pixabay-api.js';

const FORM = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let galleryLightbox = new SimpleLightbox('.gallery div ', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage;
let currentQuery;
let totalHits;

FORM.addEventListener('submit', processSearch);

async function processSearch(event) {
  event.preventDefault();
  loader.style.display = 'block';
  gallery.innerHTML = null;

  const FORM = event.currentTarget;
  const QUERY = FORM.elements.query.value.trim();

  if (QUERY === '') {
    loadMoreBtn.style.display = 'none';
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      timeout: 2000,
      position: 'topRight',
    });

    setTimeout(() => (loader.style.display = 'none'), 1000);
    return;
  }
  (loader.style.display = 'none'),
    (loadMoreBtn.style.display = 'block'),
    findImage(QUERY, 15, 1)
      .then(arr => {
        totalHits = arr.totalHits;
        currentQuery = QUERY;
        currentPage = 1;
        gallery.innerHTML = createGallery(arr);
        FORM.reset();
        galleryLightbox.refresh();
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

loadMoreBtn.addEventListener('click', event => {
  currentPage++;
  loader.style.display = 'block';
  if (currentPage * 15 < totalHits) {
    findImage(currentQuery, 15, currentPage)
      .then(arr => {
        gallery.insertAdjacentHTML('beforeend', createGallery(arr));
        FORM.reset();
        galleryLightbox.refresh();
        smootScroll();
        loader.style.display = 'none';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    loader.style.display = 'none';
    loadMoreBtn.style.display = 'none';
    iziToast.show({
      title: 'Info',
      timeout: 2000,
      color: 'blue',
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
});

function smootScroll() {
  const galleryHeight =
    gallery.firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: 2 * galleryHeight,
    behavior: 'smooth',
  });
}
