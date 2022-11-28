import FavoriteRestoIdb from '../../data/favorite-resto-idb.js';
import { createRestoItemTemplate } from '../templates/card-template.js';

const Favorite = {
  async render() {
    return `
            <div class="content">
                    <div class="latest">
                        <h1>Favorite Restaurant</h1>
                        <div class="list" id="resto-fav"></div>
                    </div>
            </div>
        `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const RestoContainer = document.querySelector('#resto-fav');

    resto.forEach((restos) => {
      RestoContainer.innerHTML += createRestoItemTemplate(restos);
    });
  },
};

export default Favorite;
