import AdService from "./AdService.js";
import { buildAdView, buildNotFoundAdsView } from "./AdView.js";

export class AdListController {
  constructor(adListElement) {
    this.adListElement = adListElement;
  }

  async showAds() {
    let ads;
    try {
      ads = await AdService.getAds();

      //Controlar si está vacio
      if (ads.length === 0) {
        this.adListElement.innerHTML = buildNotFoundAdsView();
      }

      for (const ad of ads) {
        const adArticleElement = document.createElement("div");
        adArticleElement.classList.add("p-4", "md:w-1/3");
        const adTemplate = buildAdView(ad);
        adArticleElement.innerHTML = adTemplate;

        this.adListElement.appendChild(adArticleElement);
      }
    } catch (error) {
      this.adListElement.innerHTML = buildNotFoundAdsView();
    }
  }
}
