import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from '../../../api/models/hotel-model';
import { HotelCtrlService } from '../../../api/services/hotel-ctrl.service';
import { Subscription } from 'rxjs';
import { FeatureModel } from '../../../api/models/feature-model';
import { FeatureHotelModel } from '../../../api/models/feature-hotel-model';
import { FeatureHotelCtrlService } from '../../../api/services/feature-hotel-ctrl.service';
import { FeatureCtrlService } from '../../../api/services/feature-ctrl.service';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelCtrlService,
    private featureHotelService: FeatureHotelCtrlService,
    private featureService: FeatureCtrlService
  ) {}

  hotelId: number = 0;
  private subscription!: Subscription;
  private hotelSubscription!: Subscription;
  private pivotFeatures!: Subscription;
  private featuresSubscription!: Subscription;

  pivotFeaturesHotel: FeatureHotelModel[] = [];
  features: FeatureModel[] = [];
  hotel!: HotelModel;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  bodyRequestHotelID(hotelId: number) {
    return {
      where: {
        hotelId: hotelId
      }
    };
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.hotelId = +params['id'];

      this.hotelSubscription = this.hotelService.hotelCtrlGetOne({ id: this.hotelId }).subscribe((item) => {
        this.hotel = item;
      });

      // get all features by hotelID (pivot table)
      this.pivotFeatures = this.featureHotelService
        .featureHotelCtrlGetAll({ body: this.bodyRequestHotelID(this.hotelId) })
        .subscribe((item) => {
          this.pivotFeaturesHotel = item;

          // get all features and filter by featuresID (get in pivot table)
          this.featuresSubscription = this.featureService.featureCtrlGetAll().subscribe((item) => {
            this.features = item.filter((feature) => {
              return this.pivotFeaturesHotel.some((pivot) => pivot.featureId === feature.id);
            });
          });
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.hotelSubscription.unsubscribe();
  }
}
