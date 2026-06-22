# 🧪 Cypress QA Automation Project – ServeRest

This project was developed as part of a QA Automation technical assessment using **Cypress + JavaScript**, covering both **Frontend (E2E)** and **API tests**.

---

## 📌 Objective

Automate critical scenarios of the ServeRest application, ensuring quality across key functionalities such as:

- User registration and authentication
- Main frontend user flows
- Core API endpoints

---

## 🛠️ Technologies Used

- Cypress
- JavaScript
- Node.js
- npm
- ServeRest API (https://serverest.dev/)
- ServeRest Frontend (https://front.serverest.dev/)

---

## 📁 Project Structure

```
cypress/
  e2e/
    api/        # API tests
    frontend/   # E2E tests
  support/

cypress.config.js
package.json
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/nicholasdmy/Cypress.git
cd Cypress
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress (interactive mode)

```bash
npx cypress open
```

### 4. Run tests in headless mode

```bash
npx cypress run
```

---

## 🧪 Test Scenarios

### 🌐 Frontend (E2E)
- User registration
- Login with valid credentials
- Add product to cart

### 🔌 API Tests
- POST /usuarios → create user
- GET /usuarios → validate response
- DELETE /usuarios → remove user

---

## 👤 Author

Nicholas Moreira  
QA Engineer | Automation Testing | Cypress | API Testing
