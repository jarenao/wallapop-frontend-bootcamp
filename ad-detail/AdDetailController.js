import { buildAdDetailView, buildNotFoundAdsView } from "../AdView.js";
import AdService from "../AdService.js";

export class AdDetailController {
  constructor(adDetailElement) {
    this.adDetailElement = adDetailElement;
    this.ad = null;
  }

  async showAd(adId) {
    // Controlar que no existe el valor de adId
    if (!adId) {
      alert("Id del anuncio no válido");
      setTimeout(() => {
          window.location.href = '/';
      }, 500);
      return;
    }

    try {
      this.ad = await AdService.getAd(adId);
      const adTemplate = buildAdDetailView(this.ad);
      this.adDetailElement.innerHTML = adTemplate;
    } catch (error) {
      buildNotFoundAdsView();
    }
  }
}
