import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
})
export class AppComponent {
  texteRecherche: string = '';

  router: Router = inject(Router);
  authentification: AuthentificationService = inject(AuthentificationService);
  snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit() {
    this.authentification.getInfoFromJwtLocalStorage();
  }

  onRecherche() {
    this.router.navigate(['/accueil', this.texteRecherche]);
  }

  onDeconnexion() {
    localStorage.removeItem('jwt');

    this.authentification.connecte = false;

    this.snackBar.open('Vous êtes deconnecté', undefined, {
      panelClass: 'snack-bar-valid',
      duration: 3000,
    });

    this.router.navigateByUrl('/connexion');
  }
}
