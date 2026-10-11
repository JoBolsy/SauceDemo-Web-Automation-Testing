const {test, expect} = require('@playwright/test');

// TC-CHK-01 - Checkout with Valid Information
test('TC-CHK-01 - Checkout with Valid Information', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('xpath=//*[@id="user-name"]').fill('standard_user');
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

    await page.locator('xpath=//*[@id="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('xpath=//*[@id="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('xpath=//*[@id="shopping_cart_container"]/a/span')).toHaveText('1');

    await page.locator('xpath=//*[@id="shopping_cart_container"]/a').click();

    await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveText('Sauce Labs Backpack');

    await page.locator('xpath=//*[@id="checkout"]').click();

    await page.locator('xpath=//*[@id="first-name"]').fill('John');
    await page.locator('xpath=//*[@id="last-name"]').fill('Doe');
    await page.locator('xpath=//*[@id="postal-code"]').fill('12345');

    await page.locator('xpath=//*[@id="continue"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('xpath=//*[@id="item_4_title_link"]/div')).toHaveText('Sauce Labs Backpack');

    await page.locator('xpath=//*[@id="finish"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('xpath=//*[@id="checkout_complete_container"]/h2')).toHaveText('Thank you for your order!');
});
