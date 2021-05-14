import { Component, OnInit } from '@angular/core';
import PhoneBaiTap from '../models/PhoneEx';

@Component({
  selector: 'app-bai-tap-gio-hang',
  templateUrl: './bai-tap-gio-hang.component.html',
  styleUrls: ['./bai-tap-gio-hang.component.css']
})
export class BaiTapGioHangComponent implements OnInit {
  
  smartPhones: PhoneBaiTap[] = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      invetory: 10,
      rating: 3,
      soLuong: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      invetory: 15,
      rating: 5,
      soLuong: 1,
    }, {
      id: 3,
      name: 'Iphone XS',
      image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
      description: 'Sản phẩm của US',
      price: 600,
      invetory: 20,
      rating: 4,
      soLuong: 1,
    }
  ];
  storePhones: PhoneBaiTap[] = []
  tongSoTien = 0
  clearStorePhone: PhoneBaiTap[] = []
  tongCong = 0 


  constructor() { }

  ngOnInit(): void {
    this.getLocalStore()
  }
  getLocalStore(){
    if(localStorage.getItem('Store_BT')) {
      let storeLocal = JSON.parse(localStorage.getItem("Store_BT"));
      this.storePhones = storeLocal;
  }
  
  }
  additionPhoneIntoStore(e) {
    let phoneIndex = this.storePhones.findIndex(item => item.id === e.id)
    if (phoneIndex < 0) {
      this.storePhones.push(e)
    } else {
      this.storePhones[phoneIndex].soLuong++
    }
    localStorage.setItem("Store_BT",JSON.stringify(this.storePhones));
    
  }
  deleteGioHang(abc) {
    this.storePhones = this.storePhones.filter(item => item.id !== abc.id)
    localStorage.setItem("Store_BT",JSON.stringify(this.storePhones));
  }
  tinhTienStore() {
    this.storePhones = this.clearStorePhone
    localStorage.setItem("Store_BT",JSON.stringify(this.storePhones));
  }
  truSoluong(abc: number) {
    let index = this.storePhones.findIndex(item => item.id === abc)
    if (index !== -1) {
      if (this.storePhones[index].soLuong < 2){
        this.storePhones.splice(index,1)
      }
      this.storePhones[index].soLuong = this.storePhones[index].soLuong -1
     
    }
    localStorage.setItem("Store_BT",JSON.stringify(this.storePhones));
  }
  congSoluong(abc: number) {
    let index = this.storePhones.findIndex(item => item.id === abc)
    if (index !== -1) {
      
      this.storePhones[index].soLuong = this.storePhones[index].soLuong + 1
     
    }
    localStorage.setItem("Store_BT",JSON.stringify(this.storePhones));
  }
}
