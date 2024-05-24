import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  connecte: boolean = localStorage.getItem('jwt') != null;
  id: number | null = null;
  isAdmin: boolean | null = null;
  email: string | null = null;

  constructor() {}

  connexion(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.getInfoFromJwtLocalStorage();
  }

  getInfoFromJwtLocalStorage() {
    const jwt = localStorage.getItem('jwt');

    if (jwt != null) {
      this.connecte = true;

      const partiesJwt = jwt.split('.');
      const bodyBase64 = partiesJwt[1];
      const jsonBody = window.atob(bodyBase64);
      const body = JSON.parse(jsonBody);

      this.id = body.id;
      this.isAdmin = body.admin;
      this.email = body.email;
    }
  }
}
