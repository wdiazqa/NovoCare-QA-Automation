# 🚀 NovoCare QA Automation

This repository contains the **end-to-end (E2E) automated test framework** for the **NovoCare web application**, implemented using [Cypress](https://www.cypress.io/). It is designed to validate critical functionalities, ensure platform stability, and support scalable test execution in both cloud and secure environments.

---

## 📌 Project Objectives

- Validate key user flows and critical features of the NovoCare platform.
- Ensure quality and stability through consistent automated regression testing.
- Enable CI/CD pipelines with GitHub Actions integration.
- Support secure test execution environments with VPN via self-hosted runners.
- Maintain a clean, scalable, and maintainable test architecture.

---

## 🧪 Stack & Tools

- **Cypress** – E2E testing framework  
- **BrowserStack** – Cross-browser test execution  
- **Percy** – Visual regression testing  
- **Cypress Cloud** – Test result recording and insights  
- **GitHub Actions** – CI/CD automation  
- **JavaScript**, **Node.js**, **Mocha & Chai** – Test scripting and assertions  

---

## 📁 Project Structure

```bash
novocare-cypress/
├── cypress/
│   ├── e2e/              # Test specifications (functional and visual)
│   ├── support/          # Custom commands and test setup
│   └── fixtures/         # Static test data (JSON)
├── .github/workflows/    # GitHub Actions workflows (CI pipelines)
├── cypress.config.js     # Cypress configuration file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## ⚙️ Key Features

- ✅ Functional testing using **Cypress**
- 🌐 Cross-browser execution via **BrowserStack**
- 🖼️ Visual regression testing with **Percy**
- ☁️ Cloud-based test recording using **Cypress Cloud**
- 🔁 GitHub Actions workflows for automated execution
- 🔒 VPN-ready support for **self-hosted runners** in secure environments

---

## 📦 Installation & Usage

> Prerequisites: Node.js, npm, and Cypress CLI

```bash
# Install dependencies
npm install

# Run tests locally
npx cypress open

# Run tests in headless mode
npx cypress run
```

For CI runs with BrowserStack, Percy, or Cypress Cloud, see `.github/workflows/` configuration files.
