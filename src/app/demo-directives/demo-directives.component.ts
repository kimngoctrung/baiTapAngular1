import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.css']
})
export class DemoDirectivesComponent implements OnInit {
isSick = false;
month = 0
monthOptions=[
  {
    value:1,lable:"Tháng 1"
  },
  {
    value:2,lable:"Tháng 2"
  },
  {
    value:3,lable:"Tháng 3"
  },
  {
    value:4,lable:"Tháng 4"
  },
]
name:string
isLogin=false
userName:string
passwordUser:string
  constructor() { }

  ngOnInit(): void {
    
  }
  onFeel(vale:boolean) {
      this.isSick = vale
  }
  onChangeMonth (value:number){
    this.month = value
  }
  onLoginUser (){
   if(this.userName==="cybersoft"&&this.passwordUser==="cybersoft"){
     this.isLogin=true
   }
  }

}
