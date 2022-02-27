import { AdCreateController } from "./AdCreateController.js";

document.addEventListener("DOMContentLoaded", () => {
  const formAdCreateElement = document.querySelector("form");

  const adCreateController = new AdCreateController(formAdCreateElement);
});
