import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditHotelComponent } from '../../shared/edit-hotel/edit-hotel.component';
import { MatTableDataSource } from '@angular/material/table';

import { AddHotelComponent } from '../../shared/add-hotel/add-hotel.component';
import { AddRoomComponent } from '../../shared/add-room/add-room.component';
import { HotelModel } from 'src/app/api/models';
import { HotelCtrlService, RoomCtrlService } from 'src/app/api/services';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  displayedColumns: string[] = ['position', 'name', 'city', 'country', 'actions'];

  dataSource!: MatTableDataSource<HotelModel>;

  constructor(public dialog: MatDialog, private hotelService: HotelCtrlService, private roomService: RoomCtrlService) {}

  ngOnInit(): void {
    this.getAllHotel();
    this.getAllRoom();
  }

  getAllHotel() {
    this.hotelService.hotelCtrlGetAll().subscribe((data) => {
      console.log('hotels', data);
      this.dataSource = new MatTableDataSource(data);
    });
  }
  getAllRoom() {
    this.roomService.roomCtrlGetAll().subscribe((data) => {
      console.log('rooms', data);
    });
  }

  editHotel(hotelFromRow: HotelModel): void {
    console.log(hotelFromRow);
    const dialogHotelRef = this.dialog.open(EditHotelComponent, {
      width: '500px',
      data: hotelFromRow
    });

    dialogHotelRef.afterClosed().subscribe((result) => {
      if (result) {
        this.hotelService.hotelCtrlUpdate({ id: hotelFromRow.id, body: result }).subscribe((data) => {
          console.log(data);
          this.getAllHotel();
        });
      } else {
        console.log('no result');
      }
    });
  }

  deleteHotel(hotelFromRow: HotelModel): void {
    this.hotelService.hotelCtrlDelete({ id: hotelFromRow.id }).subscribe((data) => {
      this.getAllHotel();
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addHotelDialog() {
    const dialogHotelRef = this.dialog.open(AddHotelComponent, {
      width: '500px'
    });

    dialogHotelRef.afterClosed().subscribe((result) => {
      if (result) {
        this.hotelService.hotelCtrlCreate({ body: result }).subscribe((data) => {
          console.log(data);
          this.getAllHotel();
        });
      }
    });
  }

  addRooms(element: HotelModel) {
    const dialogRoomRef = this.dialog.open(AddRoomComponent, {
      width: '500px',
      data: element
    });

    dialogRoomRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.roomService.roomCtrlCreate({ body: result }).subscribe((data) => {
          console.log(data);
          this.getAllHotel();
        });
      }
    });
  }

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
