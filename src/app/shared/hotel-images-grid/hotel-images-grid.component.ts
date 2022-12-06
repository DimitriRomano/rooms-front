import { Component, Input, OnInit } from '@angular/core';
import {faker} from "@faker-js/faker";

@Component({
  selector: 'app-hotel-images-grid',
  templateUrl: './hotel-images-grid.component.html',
  styleUrls: ['./hotel-images-grid.component.scss']
})
export class HotelImagesGridComponent implements OnInit {

  @Input() images: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
