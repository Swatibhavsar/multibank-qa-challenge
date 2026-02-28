# multibank-qa-challenge

Cypress QA automation for MultiBank flows.

## Run
```bash
npm install
npm test
```

## Reports
```bash
npm run report
```
Generates/serves Mochawesome report from `cypress/reports`.

## Failure Screenshots
Cypress saves failed test screenshots in `cypress/screenshots`.
In CI, screenshots are uploaded as GitHub Actions artifacts when a job fails.

## GitHub Actions
Workflow: `.github/workflows/cypress-tests.yml`
Runs Cypress tests on push, pull request, and daily schedule; uploads reports, screenshots, and videos as artifacts.
