import { IsLoginController } from "./isLoginController.js";

document.addEventListener("DOMContentLoaded", () => {
    const buttonsVisiblesIfLogged = document.querySelector(".nav-bar-buttons");
    const isLoginController = new IsLoginController(buttonsVisiblesIfLogged);
    
    isLoginController.checkUserLoginChangeHeader();
    isLoginController.logout();
});