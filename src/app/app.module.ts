import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {DayPage} from "../pages/day-page/day-page";
import {EntryComponent} from "../components/entry-component/entry-component";
import {EntryConfig} from "../components/entry-creator/entry-config";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    DayPage,
    EntryComponent,
    EntryConfig
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    DayPage,
    EntryConfig
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
