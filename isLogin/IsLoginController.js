import { registerService } from "../register/RegisterService.js";

export class IsLoginController {
  constructor(buttonsVisiblesIfLogged) {
    this.buttonsVisiblesIfLogged = buttonsVisiblesIfLogged;
    this.isPrivateArea();
  }

  // Cambio de header según tipo de Usuario (Guest o Logging)
  checkUserLoginChangeHeader() {
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

  // Cerrar sesión
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

  // Si no está logado, redirecciona
  isLogin() {
    const loggedUserToken = registerService.getLoggedUser();

    if (!loggedUserToken) {
      alert("Tienes que loguearte para acceder.");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
      return;
    }
  }

  // Limpiar Url
  checkUrl() {
    const searchUrl = window.location;
    const removeBar = searchUrl.pathname.split("/");
    const removeExtension = removeBar[1].split(".html");
    return removeExtension[0];
  }

  // Listado de areas privadas
  privateArea() {
    const privateArea = ["create-ad"];
    return privateArea;
  }

  // Averigua Url, Si es zona privada y si el usuario está logado
  isPrivateArea() {
    const url = this.checkUrl();
    const privateArea = this.privateArea();

    if (privateArea.includes(url)) {
      this.isLogin()
    }
  }
}
