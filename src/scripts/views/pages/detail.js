import UrlParser from '../../routes/url-parser.js';
import RestaurantData from '../../data/restaurant-data.js';
import { createRestoItemTemplateDetail } from '../templates/card-template.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';
import FavoriteRestoIdb from '../../data/favorite-resto-idb.js';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="likeButtonContainer">halo</div>

        <div id="resto-detail"></div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantData.getRestaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto-detail');

    restoContainer.innerHTML = createRestoItemTemplateDetail(data.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestoIdb,
      restaurant:{
        id: data.id,
        name: data.name,
        city: data.city,
        description: data.description,
        pictureId: data.pictureId,
        rating: data.rating,
      },
    });
  },
};

export default Detail;
