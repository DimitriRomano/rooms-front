import { Component, OnInit } from '@angular/core';
import {faker} from "@faker-js/faker";

@Component({
  selector: 'app-hotel-images-grid',
  templateUrl: './hotel-images-grid.component.html',
  styleUrls: ['./hotel-images-grid.component.scss']
})
export class HotelImagesGridComponent implements OnInit {

  image1 = faker.image.city()
  image2 = faker.image.abstract()
  image3 = faker.image.abstract()

  constructor() { }

  ngOnInit(): void {
  }

}
