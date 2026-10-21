# 🎭 Ultimate QA Automation with Playwright

Automated browser tests for the [Ultimate QA automation practice site](https://ultimateqa.com/automation), written in TypeScript with Playwright Test.

[![Playwright Tests](https://github.com/VeeraGaddimath/ultimateqa.com-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/VeeraGaddimath/ultimateqa.com-automation/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Playwright-1.64+-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ What’s covered

- 🔗 Opens each practice link on the Ultimate QA automation page and returns to the page.
- 📅 Follows the **Free Strategy Session** link and verifies the destination page title.
- 🧪 Runs tests with Playwright Test in Chromium.
- 📸 Captures screenshots and video, and records traces for test runs.
- ⚙️ Runs the test suite in GitHub Actions on pushes and pull requests to `main` or `master`.

## 🧰 Prerequisites

- [Node.js](https://nodejs.org/) (an active LTS release is recommended)
- npm (included with Node.js)

## 🚀 Getting started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/VeeraGaddimath/ultimateqa.com-automation.git
cd ultimateqa.com-automation
npm ci
```

Install the Chromium browser used by the configured Playwright project:

```bash
npx playwright install chromium
```

On Linux CI machines, install browser system dependencies as well:

```bash
npx playwright install --with-deps chromium
```

## ▶️ Run the tests

Run all tests:

```bash
npx playwright test
```

List discovered tests without running them:

```bash
npx playwright test --list
```

Open the HTML report after a run:

```bash
npx playwright show-report
```

The tests visit a live third-party website, so results may depend on its availability and content.

## 🗂️ Project structure

| Path | Purpose |
| --- | --- |
| `tests/example.spec.ts` | Browser tests for the Ultimate QA practice page |
| `playwright.config.ts` | Test discovery, Chromium project, reporter, and artifact settings |
| `.github/workflows/playwright.yml` | GitHub Actions workflow for installing dependencies and running tests |
| `package.json` / `package-lock.json` | Node.js development dependencies |
| `.gitignore` | Excludes dependencies and generated Playwright artifacts |

## 📊 Test artifacts

The HTML report is written to `playwright-report/`. Test output, including screenshots, videos, and traces, is written to `test-results/`. These generated directories are excluded from version control.

In GitHub Actions, the HTML report is uploaded as the `playwright-report` workflow artifact.
