import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from "@angular/forms"

import { AppComponent } from './app.component';
import {DemoComponent} from "./demo/demo.component"
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Baitap4Component } from './baitap4/baitap4.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { Baitap7Component } from './baitap7/baitap7.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemsComponent } from './student-items/student-items.component';
import { BookingBusComponent } from './booking-bus/booking-bus.component';
import { SeatItemsComponent } from './seat-items/seat-items.component';
import { BaiTapGioHangComponent } from './bai-tap-gio-hang/bai-tap-gio-hang.component';
import { IteamsGioHangComponent } from './iteams-gio-hang/iteams-gio-hang.component';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, HeaderComponent, ContentComponent, FooterComponent, SidebarComponent, HomeComponent, DatabindingComponent, Baitap4Component, DemoDirectivesComponent, Baitap7Component, StudentListComponent, StudentItemsComponent, BookingBusComponent, SeatItemsComponent, BaiTapGioHangComponent, IteamsGioHangComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
