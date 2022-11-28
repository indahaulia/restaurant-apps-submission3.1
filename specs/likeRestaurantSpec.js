import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb.js';
import * as TestFactories from './helpers/testFactories.js';

describe('Liking A restaurant', () => {
  const addfavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addfavoriteButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoIdb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
