const  {test, expect} = require('@playwright/test');

// TC-LOGOUT-01 - Logout from the Application
test('TC-LOGOUT-01 - Logout from the Application', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('xpath=//*[@id="user-name"]').fill('standard_user');
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

    await page.locator('xpath=//*[@id="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('xpath=//*[@id="react-burger-menu-btn"]').click();
    await page.locator('xpath=//*[@id="logout_sidebar_link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});