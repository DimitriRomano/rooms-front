import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotelComponent } from './edit-hotel.component';

describe('EditHotelComponent', () => {
  let component: EditHotelComponent;
  let fixture: ComponentFixture<EditHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
