# MultiBank QA Challenge

Automation challenge solution using Cypress for web UI testing and Node.js for a string-frequency coding task.

## What is in this repository
- Cypress E2E tests for key MultiBank user flows
- Page Object Model (`cypress/pages`)
- Fixture-driven assertions (`cypress/fixtures`)
- Mochawesome reporting
- GitHub Actions CI pipeline
- String character frequency implementation and tests

## Prerequisites
- Node.js 18 or newer
- npm (comes with Node.js)
- Chrome/Firefox/Edge installed locally for cross-browser runs

## Setup
1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Project Structure
```text
.github/workflows/cypress-tests.yml   CI workflow
cypress/
  e2e/                                Cypress test specs
  fixtures/                           Test data
  pages/                              Page Objects
  reports/                            Generated Mochawesome reports
  screenshots/                        Generated screenshots on failure
  videos/                             Generated Cypress videos
cypress.config.js                     Cypress runtime config
string-frequency.js                   Task 2 implementation
string-frequency.test.js              Task 2 test runner
```

## Run Cypress Tests (Local)
Run all E2E tests:

```bash
npm test
```

Open Cypress Test Runner:

```bash
npm run open
```

Run specific suites:

```bash
npm run test:logo
npm run test:navigation
npm run test:trading
npm run test:content
npm run test:smoke
npm run test:all
```

Run by browser:

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

Run headed/debug mode:

```bash
npm run test:headed
npm run test:debug
```

## Reporting
Run tests with Mochawesome reporter output:

```bash
npm run test:report
```

Generate HTML report from report artifacts:

```bash
npm run report
```

Report location:
- `cypress/reports/`

## Failure Diagnostics
Cypress is configured to capture diagnostics automatically:
- Screenshots on test failure: `cypress/screenshots/`
- Videos of runs: `cypress/videos/`

## GitHub Actions CI
Workflow file:
- `.github/workflows/cypress-tests.yml`

Current CI pipeline:
- Triggers on push 

Run results are available in the GitHub Actions tab under the workflow run artifacts.

## Task 2: String Character Frequency
Implementation file:
- `string-frequency.js`

Run the solution directly:

```bash
node string-frequency.js
```

Run task tests:

```bash
node string-frequency.test.js
```

## Useful Notes
- Base URLs and runtime options are configured in `cypress.config.js`.
- Keep fixture content updated if site copy changes.
- Prefer adding new selectors/flows through Page Objects to keep tests maintainable.
