import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const KEY = '42701806-8f4bc33de61eec272077c73af';
const URL = 'https://pixabay.com/api/';


export async function findImage(QUERY, perPage, page) {
  const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(LINK);
    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FFFFFF',
        timeout: 2000,
        position: 'topRight',
      });
      return;
    }
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
