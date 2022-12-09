import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthModel, BookingModel, RoomModel } from 'src/app/api/models';
import { AuthCtrlService, BookingCtrlService, HotelCtrlService, RoomCtrlService } from 'src/app/api/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit,OnChanges {


  public roomsInitial : RoomModel[]=  [];
  public roomsFiltered : RoomModel[]=  [];
  public reservation : BookingModel[] = [];
  public roomList : number[] = [];
  public nbPeople = [1,2,3,4,5,6,7,8,9,10];
  public selected: number = 1;
  public isFilterActive: boolean = false;
  public idHotel: number  = 0;
  public range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public user?: AuthModel;

  @Input() public hotelId: number | undefined;

  constructor(
    private route: ActivatedRoute, 
    private roomService: RoomCtrlService,
    private reservationService: BookingCtrlService,
     private authCtrlService: AuthCtrlService,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    // if(this.route.snapshot.paramMap.get("id")){
    //   this.idHotel = Number(this.route.snapshot.paramMap.get("id"));
    // }else if(this.hotelId){
    //   this.idHotel = Number(this.hotelId);
    // }
    this.idHotel = Number(this.hotelId);
    
    this.getRooms();
    if (localStorage.getItem('token')) {
      this.authCtrlService.authCtrlAuthInfo().subscribe((user) => {
        this.user = user;
      });
    }

  }

  ngOnChanges(): void {
    this.idHotel = Number(this.hotelId);
    this.resetFilter();
    this.getRooms();
  }

  public getRooms(){
    this.roomList = [];
    this.roomService.roomCtrlGetAll({body: {
      "where" : {
        "hotelId" : this.idHotel
      }  
    }
    }).subscribe(
      (data) => {
        data.map((room) => {
          this.roomList.push(room.id);
        })
        this.roomsInitial = data;
        this.roomsFiltered = data
      }
    )
  }


  public resetFilter(){
    this.roomsFiltered = this.roomsInitial;
    this.isFilterActive = false;
  }

  public filterRooms(startData: Date | undefined | null, endData: Date | undefined | null) {
    //dataformat: 2021-05-01T00:00:00.000Z
    this.reservationService.bookingCtrlGetAll({
      // checkIn
      body: {
        "where" : {
          "roomId" : {
            "in" : this.roomList
          },
          "checkIn" : {
            "gte" : startData,
          },
          "checkOut" : {
            "lte" : endData,
          },
          
        }
      }
    }).subscribe(
      (data) => {
        //taitement chambres dispos
        data.map((reservation) => {
           this.roomsFiltered = this.roomsFiltered.filter((room) => room.id != reservation.roomId);
        })
        //trier par id
        this.roomsFiltered.sort((a, b) => a.id - b.id);
        this.roomsFiltered = this.roomsFiltered.filter((room)=> room.capacity >= this.selected);
        this.isFilterActive = true; 
        
      }
    );
  }
   
  

  public selectedDate(startData: Date | undefined | null, endData: Date | undefined | null) {
    this.roomsFiltered = this.roomsInitial;
    if(startData != null && endData != null) {
      this.filterRooms(startData, endData);
    }
      
  }

  public registerReservation(room: RoomModel) {
    if(this.range.value.start != null && this.range.value.end != null && this.user) {
      this.reservationService.bookingCtrlCreate({
        body: {
          "checkIn" : String(this.range.value.start),
          "checkOut" : String(this.range.value.end),
          "roomId" : room.id,
          "nbPersons": this.selected,
          "authId" : this.user?.id,
        }
      }).subscribe(
        (data) => {
          this.resetFilter();
          this._snackBar.open('Réservation envoyé ✅', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        }
      );
  }}


}
