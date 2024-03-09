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

  gallery.innerHTML = null;

  const FORM = event.currentTarget;
  const QUERY = FORM.elements.query.value.trim();

  loader.textContent = 'Loading images, please wait...';

  if (QUERY === '') {
    loadMoreBtn.style.display = 'none';
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      timeout: 4000,
      position: 'topRight',
    });

    setTimeout(() => (loader.style.display = 'none'), 1000);
    return;
  }

  const timeout = setTimeout(() => {
    findImage(QUERY, 15, 1)
      .then(arr => {
        loader.style.display = 'none';
        loadMoreBtn.style.display = 'block';
        totalHits = arr.totalHits;
        currentQuery = QUERY;
        currentPage = 1;
        gallery.innerHTML = createGallery(arr);
        FORM.reset();
        galleryLightbox.refresh();
        clearTimeout(timeout);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}

loadMoreBtn.addEventListener('click', event => {
  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';
  currentPage++;
  if (currentPage * 15 < totalHits) {
    setTimeout(() => {
      findImage(currentQuery, 15, currentPage)
        .then(arr => {
          gallery.innerHTML += createGallery(arr);
          FORM.reset();
          galleryLightbox.refresh();
          smootScroll()
          loadMoreBtn.style.display = 'block';
          loader.style.display = 'none';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, 1000);
  } else {
    iziToast.show({
      title: 'Info',
      timeout: 2000,
      color: 'blue',
      position: 'bottomRight',
      message: "We're sorry, but you've reached the end of search results.",})
  
}});



function smootScroll() {
  const galleryHeight = gallery.firstElementChild.getBoundingClientRect().height
  
  window.scrollBy({
    top: 2 * galleryHeight,
    behavior: 'smooth'
  })
}