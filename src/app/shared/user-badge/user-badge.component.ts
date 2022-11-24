import {Component, Input, OnInit} from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

  @Input() firstName!: string
  @Input() lastName!: string

  profilImage = faker.image.avatar();

  //TODO Change icon on click
  constructor() { }


  ngOnInit(): void {
  }


}
