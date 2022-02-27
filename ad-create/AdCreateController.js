import { adCreateService } from "./AdCreateService.js";

export class AdCreateController {
  constructor(formAdCreateElement) {
    this.formAdCreateElement = formAdCreateElement;
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
    const textareaElement = this.formAdCreateElement.querySelector("textarea");

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        // this.checkIfAllInputsAreFilled(inputElements);
      });
    });

    textareaElement.addEventListener("input", () => {
      // this.checkIfAllInputsAreFilled(textareaElement);
    });
  }

  checkIfAllInputsAreFilled(inputElements) {
    const areAllInputsFilled = inputElements.every(
      (inputElement) => inputElement.value
    );

    if (areAllInputsFilled) {
      this.formAdCreateElement
        .querySelector("button")
        .removeAttribute("disabled");
      this.formAdCreateElement
        .querySelector("button")
        .classList.remove("disabled:opacity-75", "disabled:bg-yellow-500");
    } else {
      this.formAdCreateElement
        .querySelector("button")
        .setAttribute("disabled", "");
      this.formAdCreateElement
        .querySelector("button")
        .classList.add("disabled:opacity-75", "disabled:bg-yellow-500");
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
