import { NotificationController } from "./shared/notification/NotificationController.js";
import { AdListController } from "./AdListController.js";

document.addEventListener("DOMContentLoaded", async () => {
  const adListElement = document.querySelector(".products-container");
  const notificationElement = document.querySelector(".notification");

  const notificationController = new NotificationController(
    notificationElement
  );

  const adListController = new AdListController(adListElement);
  await adListController.showAds();
});
