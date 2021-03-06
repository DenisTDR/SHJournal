import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {EntryComponent} from "../components/entry-component/entry-component";
import {EntryConfig} from "../components/entry-config/entry-config";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EntryTypeService} from "../services/entry-type-service";
import {WeekPage} from "../pages/week-page/week-page";
import {JournalPagePage} from "../pages/journal-page/journal-page";
import {Ng2Webstorage} from "ng2-webstorage";
import {EntriesService} from "../services/entries-service";
import {DayComponent} from "../components/day-component/day-component";
import {UtilisService} from "../services/utilis-service";
import {HomePage} from "../pages/home-page/home-page";
import {MonthPage} from "../pages/month-page/month-page";
import {NgCalendarModule} from "ionic2-calendar";


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    DayComponent,
    WeekPage,
    MonthPage,
    EntryComponent,
    EntryConfig,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    WeekPage,
    EntryConfig,
    HomePage,
    MonthPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntryTypeService,
    EntriesService,
    UtilisService
    // LocalStorageService
  ]
})
export class AppModule {}
