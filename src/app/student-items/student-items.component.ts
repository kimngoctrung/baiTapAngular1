import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student-items',
  templateUrl: './student-items.component.html',
  styleUrls: ['./student-items.component.css']
})
export class StudentItemsComponent implements OnInit {
  @Input() student:{name:string,age:number}
  @Output() studentEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
onChooseStudent(){
  this.studentEmitter.emit(this.student);
}


}

