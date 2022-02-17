export default {
  async getAds() {
    const url = "http://localhost:8000/api/ads";

    let response;
    let ads;

    try {
      response = await fetch(url);
      // console.log("response", response);
      
    } catch (error) {
      throw new Error("No he podido ir a por los ads");
    }

    if (!response.ok) {
      throw new Error("Ads no encontrados");
    }

    try {
      ads = await response.json();
      // console.log('ads', ads);
      
    } catch (error) {
      throw new Error("no he podido transformar la respuesta a json");
    }

    const transformedAds = ads;

    return transformedAds;
  },
};
