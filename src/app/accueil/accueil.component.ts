import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HttpClientModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  http: HttpClient = inject(HttpClient);
  listeProduit: any = [];

  ngOnInit() {
    this.http
      .get('http://projet-angular/liste-produit.php')
      .subscribe((listeProduit) => (this.listeProduit = listeProduit));
  }
}
