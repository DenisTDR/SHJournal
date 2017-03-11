import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {EntriesService} from "../../services/entries-service";


@Component({
  selector: 'week-page',
  templateUrl: 'week-page.html'
})
export class WeekPage {

  private pageTitle: string = "";
  private startDay:Date;
  private endDay:Date;

  private daysToDisplay: Date[];

  constructor(private navCtrl: NavController,
              private entriesService: EntriesService) {
    this.startDay = new Date();
    this.startDay.setDate(this.startDay.getDate()- this.startDay.getDay());
    this.daysToDisplay = [];
    for(let i =0; i < 7; i++) {
      let dt = new Date(this.startDay.getTime());
      dt.setDate(dt.getDate() + i);
      this.daysToDisplay.push(dt)
    }

    this.endDayBuild();
  }

  public endDayBuild() {
    this.endDay = new Date(this.startDay.getTime());
    this.endDay.setDate(this.endDay.getDate() + 7);
    this.pageTitle = this.startDay.toLocaleString("en-us", { month: "long" });
  }

}
