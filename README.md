# Secure Password API

This API validates the strength of passwords based on specific criteria.

This challenge is available at [Back-End Brasil](https://github.com/backend-br/desafios).

## Features

- Validate password strength against defined criteria.
- Return appropriate HTTP status codes and messages based on validation results.

## Technologies

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Getting Started

To run this project locally, follow these steps:

1. Ensure you have Node.js v20 or greater installed.
2. Clone the repository:

   ```bash
   git clone https://github.com/JuanLucca846/secure-password-api
   ```

3. Change into the project directory:

   ```bash
   cd SecurePasswordChanllenge
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The API should now be accessible at `http://localhost:3000/`.

## API Endpoints

### Validate Password Strength

- **URL**: `/api/v1/securepassword`
- **Method**: `POST`
- **Request Body Example**:

  ```json
  {
    "password": "vYQIYxO&p$yfI^r1"
  }
  ```

- **Success Response**:

  - **Code**: `204 NO CONTENT`

- **Error Response**:

  - **Code**: `400 BAD REQUEST`
  - **Content**:

    ```json
    {
      "errors": [
        "A senha deve possuir pelo menos 08 caracteres.",
        "A senha deve possuir pelo menos uma letra maiúscula.",
        "A senha deve possuir pelo menos uma letra minúscula.",
        "A senha deve possuir pelo menos um dígito númerico.",
        "A senha deve possuir pelo menos um caractere especial (e.g, !@#$%)."
      ]
    }
    ```

## Functional Requirements

- The password must be at least 8 characters long.
- The password must contain at least one uppercase letter.
- The password must contain at least one lowercase letter.
- The password must contain at least one numeric digit.
- The password must contain at least one special character (e.g., !@#$%).
