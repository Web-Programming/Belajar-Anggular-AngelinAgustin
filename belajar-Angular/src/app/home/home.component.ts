import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation [] =[
  {
    id: 0,
    nama : " loreom ipsum ",
    city : " palembang",
    state : " ID",
    photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijkw5WSI9RvqgmLQindgfMIP1WHsGYsEx6Q&s",
    availabelUnits : 12,
    wifi : true,
    laundry : true,
  },

  {
    id: 2,
    nama : " loreom ipsum ",
    city : " Jakarta",
    state : " ID",
    photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18c40EFRH65hK2tFqXei0KSlCssVRvwli4Q&s",
    availabelUnits : 12,
    wifi : true,
    laundry : true,
  }
];
}
