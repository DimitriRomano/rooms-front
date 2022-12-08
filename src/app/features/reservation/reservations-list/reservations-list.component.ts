import { Component, OnInit } from '@angular/core';
import { AuthCtrlService } from 'src/app/api/services';
import { RoomCtrlService } from 'src/app/api/services/room-ctrl.service';
import { BookingCtrlService } from 'src/app/api/services/booking-ctrl.service';
import { HotelCtrlService } from 'src/app/api/services/hotel-ctrl.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthModel, BookingModel } from 'src/app/api/models';


@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss']
})
export class ReservationsListComponent implements OnInit {

  constructor(
    private authService: AuthCtrlService,
    private roomService: RoomCtrlService,
    private bookingService: BookingCtrlService,
    private hotelService: HotelCtrlService,
    private _snackBar: MatSnackBar
   ) { }
   
  user !: AuthModel;
  reservations ?: BookingModel[] = [];

  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.authService.authCtrlAuthInfo().subscribe((user) => {
        this.user = user;

        if(this.user.role === 'ADMIN'){
          this.hotelService.hotelCtrlGetAll({body: {
            "where": {
              "authId": this.user.id
            }
          }}).subscribe((data) => {
            const hotelsOwned : Array<number> = [];
            data.map((hotel) => {
              hotelsOwned.push(hotel.id);
            })
            // console.log('hotels', hotelsOwned);
            this.roomService.roomCtrlGetAll({body: {
              "where": {
                "hotelId": {
                  "in": hotelsOwned
                }
              }
            }}).subscribe((data) => {
              const roomsOwned : Array<number> = [];
              data.map((room) => {
                roomsOwned.push(room.id);
              })
              // console.log(roomsOwned);
              this.bookingService.bookingCtrlGetAll({body: {
                "where": {
                  "roomId": {
                    "in": roomsOwned
                  }
                }
              }}).subscribe((data) => {
                this.reservations = data;
              })
            })

          });
        }else{
          this.bookingService.bookingCtrlGetAll({body: {
            "where": {
              "authId": this.user.id
            }
          }}).subscribe((data) => {
            // console.log('reservations', data);
            this.reservations = data;
          })
        }
     });
    }
  }

  cancelReservation(reservation: BookingModel) {
    this.bookingService.bookingCtrlUpdate({
      id : reservation.id,
      body : {
        status : "CANCELED"
      }
    }).subscribe((data) => {
      console.log('reservation canceled', data);
      this._snackBar.open('Réservation annulé ❌', 'X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
       // modify table
       if (this.reservations) {
        this.reservations.map((res) => {
          if(res.id === reservation.id){
            res.status = "CANCELED";
          }
        })
      }
      })
    }

    acceptReservation(reservation: BookingModel) {
      this.bookingService.bookingCtrlUpdate({
        id : reservation.id,
        body : {
        status : "CONFIRMED"
        }
      }).subscribe((data) => {
        console.log('reservation canceled', data);
        this._snackBar.open('Réservation confirmé ✔️', 'X', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
         // modify table
         if (this.reservations) {
          this.reservations.map((res) => {
            if(res.id === reservation.id){
            res.status = "CONFIRMED";
            }
          })
        }
        })
      }

}

