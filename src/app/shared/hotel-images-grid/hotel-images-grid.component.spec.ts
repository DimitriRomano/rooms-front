import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelImagesGridComponent } from './hotel-images-grid.component';

describe('HotelImagesGridComponent', () => {
  let component: HotelImagesGridComponent;
  let fixture: ComponentFixture<HotelImagesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelImagesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelImagesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
