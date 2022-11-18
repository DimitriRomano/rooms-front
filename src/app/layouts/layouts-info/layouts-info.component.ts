import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-layouts-info',
  templateUrl: './layouts-info.component.html',
  styleUrls: ['./layouts-info.component.scss']
})
export class LayoutsInfoComponent implements OnInit {

  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  constructor() { }

  ngOnInit(): void {
  }

}
