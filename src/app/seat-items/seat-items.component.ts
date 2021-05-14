import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat-items',
  templateUrl: './seat-items.component.html',
  styleUrls: ['./seat-items.component.css']
})
export class SeatItemsComponent implements OnInit {
@Input() seat:{  SoGhe: number; TenGhe: string; Gia: number; TrangThai: boolean }
@Output() seatEmitter= new EventEmitter();
  constructor() { }
  isbooKing = false;

  ngOnInit(): void {
  }
  onSelectSeat(){
    if(this.seat.TrangThai) return;
    this.seatEmitter.emit(this.seat);
    this.isbooKing = !this.isbooKing;
  }

}
