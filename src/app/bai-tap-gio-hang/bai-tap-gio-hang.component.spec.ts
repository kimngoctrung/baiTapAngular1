import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapGioHangComponent } from './bai-tap-gio-hang.component';

describe('BaiTapGioHangComponent', () => {
  let component: BaiTapGioHangComponent;
  let fixture: ComponentFixture<BaiTapGioHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapGioHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapGioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
