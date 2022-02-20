import { registerService } from "../register/RegisterService.js";

export class LoginController {
  constructor(loginFormElement) {
    this.loginFormElement = loginFormElement;

    this.attachEvents();
  }

  attachEvents() {
    this.onAnyInputChange();
    this.onSubmitLoginForm();
  }

  onAnyInputChange() {
    const inputElements = Array.from(
      this.loginFormElement.querySelectorAll("input")
    );

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const areInputsFilled = inputElements.every(
          (inputElement) => inputElement.value
        );

        if (areInputsFilled) {
          this.loginFormElement
            .querySelector("button")
            .removeAttribute("disabled");
          this.loginFormElement
            .querySelector("button")
            .classList.remove("disabled:opacity-75", "disabled:bg-yellow-500");
        } else {
          this.loginFormElement
            .querySelector("button")
            .setAttribute("disabled", "");
          this.loginFormElement
            .querySelector("button")
            .classList.add("disabled:opacity-75", "disabled:bg-yellow-500");
        }
      });
    });
  }

  onSubmitLoginForm() {
    this.loginFormElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(this.loginFormElement);
      const username = formData.get("name");
      const password = formData.get("password");

      this.loginUser(username, password);
    });
  }

  async loginUser(username, password) {
    try {
      await registerService.loginUser(username, password);
      window.location.href = "/";
    } catch (error) {
      alert('Error en loginUser', error)
    }
  }
}
