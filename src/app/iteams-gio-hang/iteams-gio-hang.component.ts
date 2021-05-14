import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import PhoneBaiTap from '../models/PhoneEx';

@Component({
  selector: 'app-iteams-gio-hang',
  templateUrl: './iteams-gio-hang.component.html',
  styleUrls: ['./iteams-gio-hang.component.css']
})
export class IteamsGioHangComponent implements OnInit {
  @Input() item :PhoneBaiTap
  @Output() itemEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onChooseItem(){
    this.itemEmitter.emit(this.item)
  }

}
