import { buildNotificationView } from "./NotificationView.js";
import { pubSub } from "../pubSub.js";

// let promesa = sleep(3000);

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
    // this.hideToastPromise();
  }

  hideToast(ms) {
    this.notificationElement.classList.add("alert-out");
    setTimeout(() => {
      this.notificationElement.innerHTML = "";
      this.notificationElement.classList.remove("alert-out");
    }, ms);
  }

  // hideToastPromise() {
  //   this.sleep(000)
  //     .then((result) => {
  //       this.notificationElement.classList.add("alert-out");
  //       return this.sleep(200);
  //     })
  //     .then(() => {
  //       this.notificationElement.innerHTML = "";
  //       this.notificationElement.classList.remove("alert-out");
  //       return this.sleep(200);
  //     });
  // }
  // // función que devuelve una promesa
  // sleep(ms) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       resolve("resultado");
  //     }, ms);
  //   });
  // }
}
