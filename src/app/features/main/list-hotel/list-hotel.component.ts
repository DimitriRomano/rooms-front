import { Component, OnInit } from '@angular/core';
import { HotelModel } from 'src/app/api/models';
import { HotelCtrlService } from 'src/app/api/services';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent implements OnInit {
  hotels: HotelModel[] = [];
  constructor(private hotelService: HotelCtrlService) {}

  ngOnInit(): void {
    this.hotelService.hotelCtrlGetAll().subscribe((items) => {
      this.hotels = items;
    });
  }
}
