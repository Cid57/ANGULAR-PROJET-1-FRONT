import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

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

  onRecherche() {
    this.router.navigate(['/accueil', this.texteRecherche]);
  }
}
