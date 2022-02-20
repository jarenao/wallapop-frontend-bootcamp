import { RegisterController } from "./RegisterController.js"

document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector("form");

    const registerController = new RegisterController(formElement);
})