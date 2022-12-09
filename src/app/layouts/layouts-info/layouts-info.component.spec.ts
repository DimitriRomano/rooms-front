import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsInfoComponent } from './layouts-info.component';

describe('LayoutsInfoComponent', () => {
  let component: LayoutsInfoComponent;
  let fixture: ComponentFixture<LayoutsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
