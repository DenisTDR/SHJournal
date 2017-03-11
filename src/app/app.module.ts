import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {DayPage} from "../pages/day-page/day-page";
import {EntryComponent} from "../components/entry-component/entry-component";
import {EntryConfig} from "../components/entry-creator/entry-config";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EntryTypeService} from "../services/entry-type-service";
import {WeekPage} from "../pages/week-page/week-page";
// import {WebStorageModule, LocalStorageService} from "angular2-localstorage";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    DayPage,
    WeekPage,
    EntryComponent,
    EntryConfig
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    // WebStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    DayPage,
    WeekPage,
    EntryConfig
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntryTypeService,
    // LocalStorageService
  ]
})
export class AppModule {}
