import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EditHotelComponent} from "../../shared/edit-hotel/edit-hotel.component";
import {MatTableDataSource} from "@angular/material/table";
import {HotelCtrlService} from "../../api/services/hotel-ctrl.service";
import {HotelModel} from "../../api/models/hotel-model";
import {AddHotelComponent} from "../../shared/add-hotel/add-hotel.component";
import {AddRoomComponent} from "../../shared/add-room/add-room.component";
import {RoomCtrlService} from "../../api/services/room-ctrl.service";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'city', 'country', 'actions'];

  dataSource!: MatTableDataSource<HotelModel>

  constructor(public dialog: MatDialog, private hotelService: HotelCtrlService, private roomService: RoomCtrlService) {
  }

  ngOnInit(): void {
    this.getAllHotel()
    this.getAllRoom()
  }

  getAllHotel() {
    this.hotelService.hotelCtrlGetAll().subscribe((data) => {
      console.log("hotels", data)
      this.dataSource = new MatTableDataSource(data);
    });
  }
  getAllRoom() {
    this.roomService.roomCtrlGetAll().subscribe((data) => {
      console.log("rooms", data)
    });

  }

  editHotel(hotelFromRow: HotelModel): void {
    console.log(hotelFromRow)
    const dialogHotelRef = this.dialog.open(EditHotelComponent, {
      width: '500px',
      data: hotelFromRow,
    });

    dialogHotelRef.afterClosed().subscribe(result => {
      if (result) {
        this.hotelService.hotelCtrlUpdate({id: hotelFromRow.id, body: result}).subscribe((data) => {
          console.log(data)
          this.getAllHotel()
        })

      } else {
        console.log('no result')
      }
    });
  }

  deleteHotel(hotelFromRow: HotelModel): void {
    this.hotelService.hotelCtrlDelete({id: hotelFromRow.id}).subscribe((data) => {
      this.getAllHotel()
    })

  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  addHotelDialog() {
    const dialogHotelRef = this.dialog.open(AddHotelComponent, {
      width: '500px',
    });

    dialogHotelRef.afterClosed().subscribe(result => {
      if (result) {
        this.hotelService.hotelCtrlCreate({body: result}).subscribe((data) => {
          console.log(data)
          this.getAllHotel()
        })
      }
    })
  }

  addRooms(element: HotelModel) {
    const dialogRoomRef = this.dialog.open(AddRoomComponent, {
      width: '500px',
      data: element
    });

    dialogRoomRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        this.roomService.roomCtrlCreate({body: result}).subscribe((data) => {
            console.log(data)
            this.getAllHotel()
        })
      }
    })
  }
}
