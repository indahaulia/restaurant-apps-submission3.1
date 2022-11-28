import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator.js';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb.js';

const createFavoriteButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestoIdb,
    restaurant,
  });
};

export { createFavoriteButtonInitiatorWithRestaurant };
