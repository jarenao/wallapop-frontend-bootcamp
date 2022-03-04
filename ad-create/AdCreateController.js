import { adCreateService } from "./AdCreateService.js";

export class AdCreateController {
  formSubmitButtonElement = null;

  constructor(formAdCreateElement) {
    this.formAdCreateElement = formAdCreateElement;
    this.formSubmitButtonElement = formAdCreateElement.querySelector("button");
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.onAnyInputChanged();
    this.onSubmitForm();
  }

  onAnyInputChanged() {
    const inputElements = Array.from(
      this.formAdCreateElement.querySelectorAll("input")
    );
    const inputsRequired = inputElements.filter((inputRequired) => {
      if (inputRequired.hasAttribute("required")) {
        return inputRequired;
      }
    });
    const textareaElement = this.formAdCreateElement.querySelector("textarea");

    inputsRequired.forEach((inputRequired) => {
      inputRequired.addEventListener("input", () => {
        this.onAnyElementFormChange();
      });
    });

    textareaElement.addEventListener("input", () => {
      this.onAnyElementFormChange();
    });
  }

  onAnyElementFormChange() {
    const isFormValid = this.formAdCreateElement.checkValidity();

    if (isFormValid) {
      this.formSubmitButtonElement.removeAttribute("disabled");
      this.formSubmitButtonElement.classList.remove(
        "disabled:opacity-75",
        "disabled:bg-yellow-500"
      );
    } else {
      this.formSubmitButtonElement.setAttribute("disabled", "");
      this.formSubmitButtonElement.classList.add(
        "disabled:opacity-75",
        "disabled:bg-yellow-500"
      );
    }
  }

  onSubmitForm() {
    this.formAdCreateElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(this.formAdCreateElement);

      const name = formData.get("name");
      const image =
        formData.get("image") || "../shared/images/nodisponible.png";
      const description = formData.get("description");
      const price = formData.get("price");
      const AdType = formData.get("adType");
      const like = (Math.random() * 10).toFixed(2);

      this.createAd(name, image, description, price, AdType, like);
    });
  }

  async createAd(name, image, description, price, AdType, like) {
    try {
      await adCreateService.createAd(
        name,
        image,
        description,
        price,
        AdType,
        like
      );
      window.location.href = "/";
    } catch (error) {
      alert("Error en createAd", error);
    }
  }
}
