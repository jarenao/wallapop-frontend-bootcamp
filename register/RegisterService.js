import { pubSub } from "../shared/pubSub.js";
class RegisterService {
  constructor() {}

  async createUser(username, password) {
    const body = {
      username,
      password,
    };

    const response = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        `Algo en el registro ha ido mal. Inténtelo más tarde. ${data}`
      );
    }
  }

  async loginUser(username, password) {
    const body = {
      username,
      password,
    };

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        data.message
      );
    }

    const token = data.accessToken;

    localStorage.setItem("jwt", token);
  }

  getLoggedUser() {
    return localStorage.getItem("jwt") || null;
  }
}
export const registerService = new RegisterService();
