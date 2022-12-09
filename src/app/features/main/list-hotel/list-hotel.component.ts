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
  hotelsNonFiltered: HotelModel[] = [];
  constructor(private hotelService: HotelCtrlService) {}

  ngOnInit(): void {
    this.hotelService.hotelCtrlGetAll().subscribe((items) => {
      this.hotels = items;
      this.hotelsNonFiltered = items;
    });
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    //filter by city and name
    this.hotels = this.hotelsNonFiltered;
    this.hotels = this.hotels.filter((item) => {
      return item.name.toLowerCase().includes(filterValue.toLowerCase()) || item.city.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
}
