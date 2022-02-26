import { registerService } from "../register/RegisterService.js";

export class IsLoginController {
  constructor(buttonsVisiblesIfLogged) {
    this.buttonsVisiblesIfLogged = buttonsVisiblesIfLogged;
  }

  checkUserLogin() {
    const loggedUserToken = registerService.getLoggedUser();

    if (loggedUserToken) {
      const guest = this.buttonsVisiblesIfLogged.querySelector(".guest")
        ? this.buttonsVisiblesIfLogged.querySelector(".guest")
        : "";
      const login = this.buttonsVisiblesIfLogged.querySelector(".login")
        ? this.buttonsVisiblesIfLogged.querySelector(".login")
        : "";
      if (guest) {
        guest.classList.add("hidden");
      }
      if (login) {
        login.classList.remove("hidden");
      }
    }
  }

  logout() {
    const logout = this.buttonsVisiblesIfLogged.querySelector(".login .logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();

      const loggedUserToken = registerService.getLoggedUser();
      if (loggedUserToken) {
        localStorage.clear();
      }
      window.location.href = "/";
    });
  }
}
