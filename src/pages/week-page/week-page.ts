import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'week-page',
  templateUrl: 'week-page.html'
})
export class WeekPage {

  private pageTitle: string = "Titlu";
  private startDay:Date;
  private endDay:Date;
  constructor(public navCtrl: NavController) {
    this.startDay = new Date();

  }

  public endDayBuild() {
    this.endDay = new Date(this.startDay.getTime());
    this.endDay.setDate(this.endDay.getDate() + 7);
  }

}
