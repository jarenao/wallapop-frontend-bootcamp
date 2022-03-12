import { buildNotificationView } from "./NotificationView.js";
import { pubSub } from "../pubSub.js";

export class NotificationController {
  constructor(notificationElement) {
    this.notificationElement = notificationElement;
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    pubSub.subscribe(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, (message) => {
      this.show(message);
    });
  }

  show(message) {
    const notificationTemplate = buildNotificationView(message);

    this.notificationElement.innerHTML = notificationTemplate;

    const closeButtonElement = this.notificationElement.querySelector("button");

    closeButtonElement.addEventListener("click", () => {
      this.hideToast(200);
    });
  }

  hideToast(ms) {
    this.notificationElement.classList.add("alert-out");
    setTimeout(() => {
      this.notificationElement.innerHTML = "";
      this.notificationElement.classList.remove("alert-out");
    }, ms);
  }
}
