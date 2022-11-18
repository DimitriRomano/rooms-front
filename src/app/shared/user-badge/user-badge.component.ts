import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

  @Input() firstName!: string
  @Input() lastName!: string
  //TODO Change icon on click
  constructor() { }

  ngOnInit(): void {
  }


}
