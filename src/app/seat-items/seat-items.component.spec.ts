import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatItemsComponent } from './seat-items.component';

describe('SeatItemsComponent', () => {
  let component: SeatItemsComponent;
  let fixture: ComponentFixture<SeatItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
