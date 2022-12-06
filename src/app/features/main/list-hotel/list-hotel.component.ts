import { Component, OnInit } from '@angular/core';
import { HotelCtrlService } from '../../../api/services/hotel-ctrl.service';
import { HotelModel } from '../../../api/models/hotel-model';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent implements OnInit {

  hotels : HotelModel[] = [];
  constructor(private hotelService : HotelCtrlService) { }

  ngOnInit(): void {
    this.hotelService.hotelCtrlGetAll().subscribe(items => {
      this.hotels = items
    });

  }

}
