const { test, expect } = require('@playwright/test');

// TC-LOG-01 - Login with Valid Credentials
test('TC-LOG-01 - Login with Valid Credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('xpath=//*[@id="user-name"]').fill('standard_user');
  await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

  await page.locator('xpath=//*[@id="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// TC-LOG-02 - Login with Invalid Credentials
test('TC-LOG-02 - Login with Invalid Credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('xpath=//*[@id="user-name"]').fill('invalid_user');
  await page.locator('xpath=//*[@id="password"]').fill('invalid_password');

  await page.locator('xpath=//*[@id="login-button"]').click();

  await expect(page.locator('xpath=//*[@id="login_button_container"]/div/form/div[3]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

// TC-LOG-03 - Login with Empty Credentials
test('TC-LOG-03 - Login with Empty Credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('xpath=//*[@id="login-button"]').click();

  await page.locator('xpath=//*[@id="login-button"]').click();

  await expect(page.locator('xpath=//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText('Epic sadface: Username is required');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

// TC-LOG-04 - Login with Locked Out User
test('TC-LOG-04 - Login with Locked Out User', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('xpath=//*[@id="user-name"]').fill('locked_out_user');
  await page.locator('xpath=//*[@id="password"]').fill('secret_sauce');

  await page.locator('xpath=//*[@id="login-button"]').click();
  
  await expect(page.locator('xpath=//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});