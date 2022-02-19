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
      
    } catch (error) {
      throw new Error("No he podido ir a por el anuncio");
    }

    if (!response.ok) {
      throw new Error("Anuncio no encontrado");
    }

    try {
      ad = await response.json();
    } catch (error) {
      throw new Error("No he podido transformar la respuesta a json");
    }

    const transformedAd = ad;

    return transformedAd;
  }
};
