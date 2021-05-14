import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
studentList = [
  {name:"Trung",age:"13"},
  {name:"Dep",age:"14"},
  {name:"Trai",age:"15"},
  {name:"Vai",age:"16"},
];
  constructor() { }
  selectedStudent:{
    name:string,age:number
  }

  ngOnInit(): void {
  }
  onSetStudent (e){
   this.selectedStudent = e
   
  }

}
