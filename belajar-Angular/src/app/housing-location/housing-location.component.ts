import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <section>
      <img class = "listing-photo" src="" alt=" Ecterior photo of ...">
      <h2 class =" listing-heading"> TOTLE </h2>
      <p class = listing-location> City, State </p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

}
