
const { test, expect } = require('@playwright/test');

// TC-CART-01 - Add Product to Cart
test('TC-CART-01 - Add Product to Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('xpath=//*[@id="user-name"]').fill('standard_user');
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

    await page.locator('xpath=//*[@id="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('xpath=//*[@id="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('xpath=//*[@id="shopping_cart_container"]/a/span')).toHaveText('1');

    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();

    await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveText('Sauce Labs Backpack');
});

// TC-CART-02 - Remove Product from Cart
test('TC-CART-02 - Remove Product from Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('xpath=//*[@id="user-name"]').fill('standard_user');
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

    await page.locator('xpath=//*[@id="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('xpath=//*[@id="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('xpath=//*[@id="shopping_cart_container"]/a/span')).toHaveText('1');

    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();

    await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveText('Sauce Labs Backpack');

    await page.locator('xpath=//*[@id="remove-sauce-labs-backpack"]').click();

    await expect(page.locator('xpath=//*[@id="shopping_cart_container"]/a/span')).toHaveCount(0);
    await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveCount(0);
});