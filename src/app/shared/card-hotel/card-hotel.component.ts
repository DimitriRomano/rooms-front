import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  name = 	faker.company.companyName()
  price = faker.commerce.price(20, 300, 0, '€');
  url_image = faker.image.city()

  constructor() { }

  ngOnInit(): void {
  }

}

