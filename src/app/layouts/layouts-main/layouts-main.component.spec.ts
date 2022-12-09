import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsMainComponent } from './layouts-main.component';

describe('LayoutsMainComponent', () => {
  let component: LayoutsMainComponent;
  let fixture: ComponentFixture<LayoutsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
