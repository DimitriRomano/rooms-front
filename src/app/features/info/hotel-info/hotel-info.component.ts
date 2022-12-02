import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from '../../../api/models/hotel-model';
import { HotelCtrlService } from '../../../api/services/hotel-ctrl.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit, OnDestroy {

  constructor(private route : ActivatedRoute, private hotelService : HotelCtrlService) { }

  id : number =0;
  private subscription !: Subscription;
  private hotelSubscription !: Subscription;

  hotel !: HotelModel;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.hotelSubscription = this.hotelService.hotelCtrlGetOne({ id : this.id }).subscribe(item => {
        this.hotel = item;
      })
    })
  }


  ngOnDestroy():void {
    this.subscription.unsubscribe();
    this.hotelSubscription.unsubscribe();
  }
}
