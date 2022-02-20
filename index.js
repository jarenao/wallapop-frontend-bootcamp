import { AdListController } from "./AdListController.js";

document.addEventListener("DOMContentLoaded", async () => {
    const adListElement = document.querySelector(".products-container");
    const adListController = new AdListController(adListElement);
    await adListController.showAds();
});