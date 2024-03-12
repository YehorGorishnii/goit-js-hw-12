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
let QUERY;
FORM.addEventListener('submit', processSearch);

async function processSearch(event) {
  event.preventDefault();
  gallery.innerHTML = null;

  const FORM = event.currentTarget;
  const QUERY = FORM.elements.query.value.trim();

  if (QUERY === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      timeout: 2000,
      position: 'topRight',
    });
    show(loader);
    hidden(loadMoreBtn);
    setTimeout(() => (loader.style.display = 'none'), 1000);
    return;
  }
  show(loader);
  findImage(QUERY, 15, 1)
    .then(arr => {
      hidden(loader);
      show(loadMoreBtn);
      if (arr && arr.totalHits) {
        totalHits = arr.totalHits;
        console.log(totalHits);
      } else {
        totalHits = 0;
        hidden(loadMoreBtn);
      }
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
loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  if (currentPage * 15 < totalHits) {
    show(loader);
    findImage(currentQuery, 15, currentPage)
      .then(arr => {
        hidden(loader);
        gallery.insertAdjacentHTML('beforeend', createGallery(arr));
        FORM.reset();
        galleryLightbox.refresh();
        smootScroll();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    const result = totalHits - currentPage * 15
    console.log(result);
    findImage(currentQuery, 15 + result , currentPage)
      .then(arr => {
        hidden(loader);
        gallery.insertAdjacentHTML('beforeend', createGallery(arr));
        FORM.reset();
        galleryLightbox.refresh();
        smootScroll()
      })
      .catch(error => {
        console.error('Error:', error);
      });
    hidden(loadMoreBtn);

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

function show(element) {
  return (element.style.display = 'block');
}

function hidden(element) {
  return (element.style.display = 'none');
}
