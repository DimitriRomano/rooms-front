import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    let button = document.getElementById('open_sidebar_icon');
    if (button) {
      button.classList.toggle('rotate-270');
    }
  }
}
