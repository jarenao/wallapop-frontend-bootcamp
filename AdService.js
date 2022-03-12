import { registerService } from "./register/RegisterService.js";
import { pubSub } from "./shared/pubSub.js";

export default {
  async getAds() {
    const url = "http://localhost:8000/api/ads";

    let response;
    let ads;

    try {
      response = await fetch(url);
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No he podido ir a por los Anuncios. ${error}`
      );
    }

    if (!response.ok) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `Anuncios no encontrados.`
      );
    }

    try {
      ads = await response.json();
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No he podido transformar la respuesta a json. ${error}`
      );
    }

    // Preparando el transformer
    const transformedAds = ads;
    return transformedAds;
  },

  async getAd(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`;

    let response;
    let ad;

    try {
      response = await fetch(url);

      if (!response.ok) {
        pubSub.publish(
          pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
          `El producto no existe.`
        );
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        return;
      }
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No he podido ir a por el anuncio. ${error}`
      );
    }

    try {
      ad = await response.json();
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No he podido transformar la respuesta a json. ${error}`
      );
    }

    // Preparando el transformer
    const transformedAd = ad;
    return transformedAd;
  },

  async deleteAd(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`;

    let response;

    try {
      response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + registerService.getLoggedUser(),
        },
      });
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `No he podido borrar el producto. ${error}`
      );
    }

    if (!response.ok) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `Producto no encontrado. ${error}`
      );
    }
  },
};
