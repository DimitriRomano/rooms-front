import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() profilImage: string | null | undefined;

  //TODO Change icon on click
  constructor(public router: Router) {}

  handleGoToProfile = () => {
    //redirect to "/" using router service
    this.router.navigate(['/']);
  };

  ngOnInit(): void {}
}
