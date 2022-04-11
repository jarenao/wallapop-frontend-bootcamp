import { pubSub } from "../shared/pubSub.js";
import { registerService } from "./RegisterService.js";

export class RegisterController {
  constructor(formElement) {
    this.formElement = formElement;
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.onAnyInputChanged();
    this.onSubmitForm();
  }

  onAnyInputChanged() {
    const inputElements = Array.from(
      this.formElement.querySelectorAll("input")
    );

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkIfAllInputsAreFilled(inputElements);
      });
    });
  }

  checkIfAllInputsAreFilled(inputElements) {
    const areAllInputsFilled = inputElements.every(
      (inputElement) => inputElement.value
    );

    if (areAllInputsFilled) {
      this.formElement.querySelector("button").removeAttribute("disabled");
      this.formElement
        .querySelector("button")
        .classList.remove("disabled:opacity-75", "disabled:bg-yellow-500");
    } else {
      this.formElement.querySelector("button").setAttribute("disabled", "");
      this.formElement
        .querySelector("button")
        .classList.add("disabled:opacity-75", "disabled:bg-yellow-500");
    }
  }

  onSubmitForm() {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(this.formElement);

      const username = formData.get("name");
      const passwordInput = formData.get("password");
      const passwordRepeat = formData.get("password-repeat");

      const arePasswordsEqual = this.checkIfPasswordsAreEqual(
        passwordInput,
        passwordRepeat
      );

      if (!arePasswordsEqual) {
        pubSub.publish(
          pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
          "Las contraseñas no son iguales"
        );
        return;
      }

      const isPasswordValid = this.checkIfPasswordMatchRegExp(passwordInput);

      if (!isPasswordValid) {
        pubSub.publish(
          pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
          "La contraseña debe contener sólo números o letras"
        );
        return;
      }

      this.createUser(username, passwordInput);
    });
  }

  checkIfPasswordsAreEqual(passwordInput, passwordRepeat) {
    return passwordInput === passwordRepeat;
  }

  checkIfPasswordMatchRegExp(password) {
    const passwordRegExp = new RegExp(/^[a-zA-Z0-9]*$/);
    return passwordRegExp.test(password);
  }

  async createUser(username, passwordInput) {
    try {
      await registerService.createUser(username, passwordInput);
      this.loginUser(username, passwordInput);
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `Algo en el registro ha ido mal. ${error}`
      );
    }
  }

  async loginUser(username, passwordInput) {
    try {
      await registerService.loginUser(username, passwordInput);
      window.location.href = "/";
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `Algo ha ido mal. <br> ${error}`
      );
    }
  }
}
