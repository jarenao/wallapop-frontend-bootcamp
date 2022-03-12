import AdService from "./AdService.js";
import { buildAdView, buildAdDetailView, buildNotFoundAdsView } from "./AdView.js";
import { RegisterController } from "./register/RegisterController.js";
import { pubSub } from "./shared/pubSub.js";

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
        pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        "En estos momentos no hay Anuncios."
        );
      }

      for (const ad of ads) {
        const adArticleElement = document.createElement("div");
        adArticleElement.classList.add("p-4", "md:w-1/3");
        const adTemplate = buildAdView(ad);
        adArticleElement.innerHTML = adTemplate;

        this.adListElement.appendChild(adArticleElement);
      }
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        "Error obteniendo Anuncios"
      );
      this.adListElement.innerHTML = buildNotFoundAdsView();
    }
  }
}
