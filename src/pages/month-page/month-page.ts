import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EntriesService} from "../../services/entries-service";
import {EntryModel} from "../../models/entry-model";
import {WeekPage} from "../week-page/week-page";
import {UtilisService} from "../../services/utilis-service";

/*
 Generated class for the MonthPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-month-page',
  templateUrl: 'month-page.html'
})
export class MonthPage implements OnInit {

  private selectedWeekTitle: string = null;
  private eventSource: any = [];
  private selectedDate: Date = null;
  private pageHeader: string = null;

  private calendar: any = {
    mode: "month",
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private entriesService: EntriesService,
              private utilis: UtilisService) {
  }

  ionViewDidLoad() {

  }

  ngOnInit(): void {
    // console.log('ngOnInit MonthPagePage');
    let entries = this.entriesService.getAllEntries();
    this.eventSource = [];

    entries.forEach((entry: EntryModel) => {
      let dt = new Date(entry.date.getTime());
      dt.setHours(0);
      dt.setMinutes(0);
      dt.setSeconds(1);
      let dt2 = new Date(dt.getTime());
      dt2.setHours(23);
      dt2.setMinutes(59);
      dt2.setSeconds(59);
      this.eventSource.push({
        title: entry.name,
        startTime: dt,
        endTime: dt2
      });
    });
  }

  public onCurrentDateChanged($event) {
    // console.log('onCurrentDateChanged');
    // console.log($event);
    this.selectedDate = $event;
    this.selectedWeekTitle = this.utilis.getWeekTitle($event);
    this.pageHeader = this.utilis.getMonthName(this.selectedDate) + " " + this.selectedDate.getFullYear();
    // console.log("Set: " + this.selectedWeekTitle);
    if ($event.getTime() == this.calendar.currentDate.getTime()) {
      return;
    }
    // this.navCtrl.push(WeekPage, {week: $event});
  }

  public reloadSource(startTime, endTime) {

  }

  public onEventSelected($event) {
    // console.log('onEventSelected');
    // console.log($event);
    this.navCtrl.push(WeekPage, {week: $event.startTime});
  }

  public onViewTitleChanged($event) {

  }

  public onTimeSelected($event) {

  }

  public gotoSelectedWeek() {
    this.navCtrl.push(WeekPage, {week: this.selectedDate});
  }

  public goNext(): void {
    var dt = new Date(this.selectedDate.getTime());
    dt.setMonth(dt.getMonth() + 1);
    this.calendar.currentDate = dt;
  }

  public goBack(): void {
    var dt = new Date(this.selectedDate.getTime());
    dt.setMonth(dt.getMonth() - 1);
    this.calendar.currentDate = dt;
  }

}
