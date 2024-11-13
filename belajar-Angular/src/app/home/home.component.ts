import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation [] = 
  {
    id: 0,
    nama : " loreom ipsum ",
    city : " palembang",
    state : " ID",
    photo : " ",
    availabelUnits : 12,
    wifi : true,
    laundry : true,
  }
}
