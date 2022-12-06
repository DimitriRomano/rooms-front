import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    let button = document.getElementById('open_sidebar_icon');
    if (button) {
      button.classList.toggle('rotate-270');
    }
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
