import { registerService } from "./register/RegisterService.js";

export default {
  async getAds() {
    const url = "http://localhost:8000/api/ads";

    let response;
    let ads;

    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error("No he podido ir a por los Anuncios");
    }

    if (!response.ok) {
      throw new Error("Anuncios no encontrados");
    }

    try {
      ads = await response.json();
    } catch (error) {
      throw new Error("No he podido transformar la respuesta a json");
    }

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
        alert("El producto no existe");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
        return;
        // throw new Error("Anuncio no encontrado");
      }
    } catch (error) {
      throw new Error("No he podido ir a por el anuncio");
    }

    try {
      ad = await response.json();
    } catch (error) {
      throw new Error("No he podido transformar la respuesta a json");
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
      throw new Error("No he podido borrar el producto");
    }

    if (!response.ok) {
      throw new Error("Producto no encontrado");
    }
  },
};
