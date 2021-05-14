import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
fullName = "Tao La Trum";
age = 20;
email = "taolatrumg@taolatrum.com";
avatar = "https://i.ytimg.com/vi/ozmKgqCnV6o/maxresdefault.jpg"

  constructor() { }
showMessages(mes){
  console.log(this.fullName,this.age,mes)
}
inCreaseAge(){
  this.age++;
}
  ngOnInit(): void {
  }

}
