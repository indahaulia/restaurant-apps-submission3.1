import CONFIG from '../../globals/config.js';

const createRestoItemTemplate = (resto) => `
    <div class="list_item">
        <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}" class="imageresto">
        <div class="city">${resto.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : ${resto.rating}
                </p>
                <div>
                <h1 class="list_item_title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
                <p class="list_item_desc">${resto.description}.slice(0, 150)}...</p>
                </div>
            </div>
    </div>
`;

const createRestoItemTemplateDetail = (resto) => `
    <div class="detail">
      <h1 class="title">${resto.name}</h1>
      <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
      <p class="list_item_desc_detail">${resto.description}.slice(0, 150)}...</p>
      <div class="info">
        <h2>Information</h2>
          <ul>
              <li>
                <h3>Kota</h3>
                <p>${resto.city}</p>
              </li>
              <li>
                <h3>Alamat</h3>
                <p>${resto.address}</p>
              </li>
              <li>
                <h3>Rating</h3>
                <p>${resto.rating}</p>
              </li>
              <li>
                <h3>Foods Menu</h3>
                <span id="food">
                  <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
                </span>
              </li>
              <li>
                <h3>Drinks Menu</h3>
                <span id="drink">
                    <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
                </span>
              </li>
          </ul>
      </div>

      <h3 class="title-review">Reviews</h3>
      <div class="detail-review">
      ${resto.customerReviews
    .map(
      (review) => `
            <div class="detail-review-item">
              <div class="review-header">
                <p class="review-name">${review.name}</p>

                <p class="review-date">${review.date}</p>
              </div>

              <div class="review-body">
                ${review.review}
              </div>
            </div>
          `,
    )
    .join('')}
      </div>
    </div>
    </div>
    
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="far fa-heart  aria-hidden="true""></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart  aria-hidden="true""></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoItemTemplateDetail, createLikeButtonTemplate, createLikedButtonTemplate,
};
