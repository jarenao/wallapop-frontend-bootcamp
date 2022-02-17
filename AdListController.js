import AdService from "./AdService.js"
export class AdListController {

    constructor(adListElement) {
        this.adListElement = adListElement;
    }

    async showAds() {
        let ads;

        ads = await AdService.getAds();
        console.log('ads', ads);
        
    }
}