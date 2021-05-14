import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamsGioHangComponent } from './iteams-gio-hang.component';

describe('IteamsGioHangComponent', () => {
  let component: IteamsGioHangComponent;
  let fixture: ComponentFixture<IteamsGioHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamsGioHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamsGioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
