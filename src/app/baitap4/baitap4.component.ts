import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.css']
})
export class Baitap4Component implements OnInit {
  userID:string
  email:string
  constructor() { }
bindingData (value: string) {
  this.userID = value
}
  ngOnInit(): void {
  }

}
