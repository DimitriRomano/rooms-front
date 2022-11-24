import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-layouts-info',
  templateUrl: './layouts-info.component.html',
  styleUrls: ['./layouts-info.component.scss']
})
export class LayoutsInfoComponent implements OnInit {

  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  constructor() { }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  ngOnInit(): void {
  }

}
