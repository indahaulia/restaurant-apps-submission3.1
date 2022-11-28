Feature('Liking Resto');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.list_item_title');
    await I.grabTextFrom(locate('.list_item_title').first());
    I.click(locate('.list_item_title').first());
    I.wait(2);
    I.click('#likeButton');
    I.amOnPage('/#/detail');
    I.click(locate('.list_item_title').first());
    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/detail');
    I.dontSeeElement('.list_item_title');
});
