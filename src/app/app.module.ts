import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {EntryComponent} from "../components/entry-component/entry-component";
import {EntryConfig} from "../components/entry-creator/entry-config";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EntryTypeService} from "../services/entry-type-service";
import {WeekPage} from "../pages/week-page/week-page";
import {Ng2Webstorage} from "ng2-webstorage";
import {EntriesService} from "../services/entries-service";
import {DayComponent} from "../components/day-component/day-component";


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    DayComponent,
    WeekPage,
    EntryComponent,
    EntryConfig
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    DayComponent,
    WeekPage,
    EntryConfig
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntryTypeService,
    EntriesService
    // LocalStorageService
  ]
})
export class AppModule {}
