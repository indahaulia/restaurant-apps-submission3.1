import RestaurantData from '../../data/restaurant-data.js';
import { createRestoItemTemplate } from '../templates/card-template.js';

const Home = {
  async render() {
    return `
      <div class="content">
        <div id="loading"></div>
        <div class="latest">
            <h1>Explore Restaurant</h1>
            <div class="list" id="tes"></div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const data = await RestaurantData.getRestaurantList();
    const restoContainer = document.querySelector('.list');
    data.restaurants.forEach((restos) => {
      restoContainer.innerHTML += createRestoItemTemplate(restos);
    });
  },

};

export default Home;
