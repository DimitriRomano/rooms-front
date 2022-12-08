import { AuthCtrlService } from 'src/app/api/services';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.scss']
})
export class SidebarClientComponent implements OnInit {
  mode = 'side';
  isAdmin = false;
  constructor(private authCtrlService: AuthCtrlService) { }

  handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  ngOnInit(): void {

    this.authCtrlService.authCtrlAuthInfo().subscribe((user) => {
      if (user.role === 'ADMIN') {
        this.isAdmin = true;
      }
    });
  }
}
