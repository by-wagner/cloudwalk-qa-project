# cloudwalk-qa-project
cloudwalk-qa-project is a project for automated testing of QR code functionality on the InfinitePay app website, using Cypress and GitHub Actions for E2E tests and security checks.

## Description
This project is aimed at automating quality tests for the InfinitePay app's website, focusing specifically on QR code functionality. It utilizes Cypress for End-to-End (E2E) testing and GitHub Actions for automated test execution and security checks with the Mozilla Observatory API.

## Setup

### Prerequisites
- Node.js (Version 14 or higher recommended)
- npm (Included with Node.js installation)

### Installation

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/by-wagner/cloudwalk-qa-project.git
    cd cloudwalk-qa-project
    ```

2. Install the required dependencies using npm:
    ```
    npm install
    ```

## Running Tests

### Cypress E2E Tests

This project uses Cypress for conducting E2E tests. After cloning the repository and installing dependencies, follow the steps below to execute E2E tests.

**To run tests in headless mode:**
    ```
    npm run test
    ```

**To open the Cypress GUI for interactive test execution:**
    ```
    npm run open
    ```

## GitHub Actions Workflow

This project leverages GitHub Actions to automate the following processes:

- **Automatic E2E Test Execution**: Tests are automatically executed using Cypress with every `push` to the repository.

- **Security Check with Mozilla Observatory**: An additional workflow step conducts a security check of the website, ensuring it meets specific security standards, utilizing the Mozilla Observatory API.

### Security Check Workflow

The security workflow begins with an analysis of the website through the Mozilla Observatory API and verifies the security grade achieved is A+, A, or A-. For more details, see the `.github/workflows/security_check.yml` file in the repository.
