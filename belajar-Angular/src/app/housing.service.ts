import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList : HousingLocation[]=[
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
  constructor() { }

  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: Number) : HousingLocation| undefined{
    return this.housingLocationList.find(housingLocation =>
      housingLocation.id == id);
  }
}
