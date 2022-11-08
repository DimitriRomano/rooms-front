import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.scss']
})
export class SidebarClientComponent implements OnInit {
  mode = 'side';
  constructor() {}

  ngOnInit(): void {}
}
