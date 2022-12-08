import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingModel, RoomModel } from 'src/app/api/models';
import { BookingCtrlService, HotelCtrlService, RoomCtrlService } from 'src/app/api/services';
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

  @Input() public hotelId: number | undefined;

  constructor(private route: ActivatedRoute, private roomService: RoomCtrlService,private reservationService: BookingCtrlService) { }

  ngOnInit(): void {
    // if(this.route.snapshot.paramMap.get("id")){
    //   this.idHotel = Number(this.route.snapshot.paramMap.get("id"));
    // }else if(this.hotelId){
    //   this.idHotel = Number(this.hotelId);
    // }
    this.idHotel = Number(this.hotelId);
    
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
    );

  }

  ngOnChanges(): void {
    this.idHotel = Number(this.hotelId);
    this.resetFilter();
  }

  public resetFilter(){
    this.roomsFiltered = [];
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
    if(this.range.value.start != null && this.range.value.end != null) {
      this.reservationService.bookingCtrlCreate({
        body: {
          "checkIn" : String(this.range.value.start),
          "checkOut" : String(this.range.value.end),
          "roomId" : room.id,
          "nbPersons": this.selected,
          "authId" : 1,
        }
      }).subscribe(
        (data) => {
          this.resetFilter();
        }
      );
  }}


}
