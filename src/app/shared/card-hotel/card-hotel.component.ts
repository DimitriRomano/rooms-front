import { Component, Input, OnInit } from '@angular/core';
import { HotelModel } from '../../api/models';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  @Input() hotel !: HotelModel;

  constructor() { }

  ngOnInit(): void {
  }
}

