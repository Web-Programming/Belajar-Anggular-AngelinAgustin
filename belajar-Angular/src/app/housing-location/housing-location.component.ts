import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <img class = "listing-photo" [src]="housingLocation.photo" alt=" Exterior photo of {{housingLocation.nama}}">
      <h2 class =" listing-heading"> {{housingLocation.nama}} </h2>
      <p class = listing-location>{{housingLocation.city}}, {{housingLocation.state}}  </p>
      <a routerLink = "details">Show More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
