# SauceDemo Web Automation Testing

## Project Overview

This project demonstrates automated UI testing of the [SauceDemo](https://www.saucedemo.com/) e-commerce website using **Playwright and JavaScript**.

The purpose of this project is to validate core e-commerce functionalities, including user authentication, shopping cart management, checkout, and logout through automated end-to-end testing.

The project includes positive and negative test scenarios, automated assertions, and test execution reports.

## Tech Stack

- **JavaScript** - Programming language
- **Playwright** - UI automation testing framework
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager
- **Chromium** - Browser used for testing

## Test Scenarios

A total of **8 automated test cases** were implemented across four functional modules.

### 1. Login Testing

| Test Case ID | Test Scenario |
|---|---|
| TC-LOG-01 | Login with Valid Credentials |
| TC-LOG-02 | Login with Invalid Credentials |
| TC-LOG-03 | Login with Empty Credentials |
| TC-LOG-04 | Login with Locked Out User |

### 2. Shopping Cart Testing

| Test Case ID | Test Scenario |
|---|---|
| TC-CART-01 | Add Product to Cart |
| TC-CART-02 | Remove Product from Cart |

### 3. Checkout Testing

| Test Case ID | Test Scenario |
|---|---|
| TC-CHECKOUT-01 | Checkout with Valid Information |

### 4. Logout Testing

| Test Case ID | Test Scenario |
|---|---|
| TC-LOGOUT-01 | Logout Successfully |

## Project Structure

```text
Web Automation Testing/
│
├── tests/
│   ├── login.test.js
│   ├── cart.test.js
│   ├── checkout.test.js
│   └── logout.test.js
│
├── evidence/
│   └── Test Execution Evidence.png
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── Test Execution Summary.md
└── README.md
```

## Installation & Setup

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/JoBolsy/SauceDemo-Web-Automation-Testing.git
cd SauceDemo-Web-Automation-Testing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browser

```bash
npx playwright install chromium
```

## Running Automated Tests

### Run All Tests

```bash
npx playwright test --project=chromium
```

### Run Tests in Headed Mode

```bash
npx playwright test --project=chromium --headed
```

### Run a Specific Test File

```bash
npx playwright test tests/login.test.js --project=chromium
```

### Run a Specific Test Case

```bash
npx playwright test --grep "TC-LOG-01" --project=chromium
```

## Test Reporting

Playwright provides an HTML report to review automated test execution results.

To open the report:

```bash
npx playwright show-report
```

Ensure that the HTML reporter is enabled in the Playwright configuration when generating the report.

## Test Execution Results

The automated test execution was completed successfully using Chromium.

| Metric | Result |
|---|---|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Skipped | 0 |
| Pass Rate | 100% |

**Overall Status: PASSED**

## Test Evidence

The following screenshot shows the Playwright test execution results.

![Test Execution Evidence](evidence/Test%20Execution%20Evidence.png)

## Conclusion

All 8 automated test cases passed successfully, confirming that the tested login, shopping cart, checkout, and logout functionalities behaved as expected.

This project demonstrates fundamental QA automation skills, including:

- Designing positive and negative test scenarios
- Automating user interactions using Playwright
- Identifying web elements using locators
- Implementing assertions to verify expected results
- Executing automated tests using Chromium
- Reviewing and documenting test execution results

The testing results are limited to the implemented scenarios and do not guarantee complete application coverage.