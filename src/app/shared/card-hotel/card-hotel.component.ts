import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  text = faker.lorem.paragraphs(1);
  name = 	faker.company.companyName()

  constructor() { }

  ngOnInit(): void {
  }

}

