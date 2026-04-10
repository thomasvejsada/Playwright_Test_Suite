# Playwright Data-Driven Test Suite

This project demonstrates a scalable, data-driven UI test automation framework built using Playwright and TypeScript.

## 🚀 Overview

The goal of this project is to validate task management functionality in a demo application by dynamically generating test cases from a JSON data source. This approach reduces code duplication and makes the test suite easy to maintain and extend.

## 🧠 Key Features

- Data-driven testing using JSON
- Playwright test runner with TypeScript
- Page Object Model (POM) for clean and maintainable structure
- Reusable login logic using `beforeEach`
- Dynamic test generation from external data
- Robust locator strategies to ensure reliable assertions

## 📁 Project Structure
```
playwright-test/
│
├── tests/ # Test specifications
│ └── taskValidation.spec.ts
│
├── pages/ # Page Object Models
│ ├── loginPage.ts
│ └── boardPage.ts
│
├── data/ # Test data
│ └── testData.json
│
├── playwright.config.ts
├── package.json
└── README.md
```
## ▶️ Running the Tests

1. Install dependencies:
npm install

2. Install Playwright browsers:
npx playwright install

3. Run tests:
npx playwright test

4. Run tests in headed mode:
npx playwright test --headed

## 🛠 Design Decisions

Data-Driven Approach:
All test scenarios are stored in a JSON file and dynamically executed. This allows new test cases to be added without modifying test logic, improving scalability.

Page Object Model (POM):
UI interactions are abstracted into page classes, separating test logic from UI behavior. This improves readability, reuse, and maintainability.

Reusable Login Logic:
Login functionality is handled in a beforeEach hook to avoid duplication and ensure consistency across all tests.

Locator Strategy:
Special attention was given to selector precision. Ambiguous text-based locators were refined to avoid strict mode violations and ensure reliable element targeting.

Centralized Configuration:
The base URL and test settings are managed in the Playwright config file, allowing easy switching between environments.

## 📌 Notes

This project is designed to reflect real-world QA automation practices, focusing on scalability, maintainability, and reliability.

