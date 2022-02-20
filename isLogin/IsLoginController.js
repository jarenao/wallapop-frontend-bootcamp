import { registerService } from "../register/RegisterService.js";

export class IsLoginController {
  constructor(buttonsVisiblesIfLogged) {
    this.buttonsVisiblesIfLogged = buttonsVisiblesIfLogged;
    this.checkUserLogin();
  }

  checkUserLogin() {
    const loggedUserToken = registerService.getLoggedUser();
    
    if(loggedUserToken) {

    } else {

    }
  }
}
