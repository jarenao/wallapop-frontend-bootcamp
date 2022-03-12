import { registerService } from "../register/RegisterService.js";

class AdCreateService {
  constructor() {}

  async createAd(name, image, description, price, AdType, like) {
    const url = "http://localhost:8000/api/ads";
    const body = {
      name,
      image,
      description,
      price,
      AdType,
      like,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + registerService.getLoggedUser(),
        },
      });
      const data = await response.json();

      if (!response.ok) {
        pubSub.publish(
          pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
          `No se ha podido añadir el producto. ${data.message}`
        );
      }
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No se ha podido añadir el producto. ${error}`
      );
    }

  }
}

export const adCreateService = new AdCreateService();
