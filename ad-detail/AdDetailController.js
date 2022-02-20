import { registerService } from "../register/RegisterService.js";
import { buildAdDetailView, buildNotFoundAdsView } from "../AdView.js";
import AdService from "../AdService.js";
import { decodeToken } from "../utils/decodeToken.js";

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
        window.location.href = "/";
      }, 500);
      return;
    }

    try {
      this.ad = await AdService.getAd(adId);
      const adTemplate = buildAdDetailView(this.ad);
      this.adDetailElement.innerHTML = adTemplate;

      this.handleDeleteButton();
    } catch (error) {
      buildNotFoundAdsView();
    }
  }

  handleDeleteButton() {
    const loggedUserToken = registerService.getLoggedUser();

    if (loggedUserToken) {
      const userInfo = decodeToken(loggedUserToken);
      const isOwner = this.isAdOwner(userInfo.userId);
      console.log(isOwner);

      if (isOwner) {
        this.drawDeleteButton();
      }
    }
  }

  isAdOwner(userId) {
    return userId === this.ad.userId;
  }

  drawDeleteButton() {
    const buttonDelete = this.adDetailElement.querySelector('.delete-product');
    buttonDelete.classList.remove('hidden');
    buttonDelete.addEventListener("click", () => {
      this.deleteAd();
    });
  }

  async deleteAd() {
    const shouldDelete = window.confirm("¿Estás seguro de borrar el producto?");

    if (shouldDelete) {
      try {
        await AdService.deleteAd(this.ads.id);
        window.location.href = "/";
      } catch (error) {
        alert("Este anuncio no es tuyo, no puedes borrarlo");
      }
    }
  }

}
