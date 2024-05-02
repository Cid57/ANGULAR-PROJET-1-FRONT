import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  http: HttpClient = inject(HttpClient);
  listeProduit: any = [];

  ngOnInit() {
    this.raffraichirListeproduit();
  }

  raffraichirListeproduit() {
    this.http
      .get('http://projet-angular/liste-produit.php')
      .subscribe((listeProduit) => (this.listeProduit = listeProduit));
  }

  onClickSupprime(idProduit: number) {
    this.http
      .delete('http://projet-angular/supprimer-liste-produit?id=' + idProduit)
      .subscribe((resultat) => this.raffraichirListeproduit());
  }
}
