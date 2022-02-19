import { AdDetailController } from "../ad-detail/AdDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
  const adDetailElement = document.querySelector(".product-detail");

  const searchParams = new URLSearchParams(window.location.search);
  console.log(searchParams);

  const adId = searchParams.get("id");

  const adDetailController = new AdDetailController(adDetailElement);

  adDetailController.showAd(adId);
});
