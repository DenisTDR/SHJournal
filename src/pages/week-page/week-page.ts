import {Component, OnInit, ViewChild} from '@angular/core';

import {NavController, ModalController, NavParams} from 'ionic-angular';
import {EntriesService} from "../../services/entries-service";
import {DaySelector} from "../../components/day-selector/day-selector";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {UtilisService} from "../../services/utilis-service";


@Component({
  selector: 'week-page',
  templateUrl: 'week-page.html'
})
export class WeekPage implements OnInit {
  private form: FormGroup;

  @ViewChild("daySelector") daySelector: any;

  public pageTitle: string = "";
  private startDay: Date;
  private endDay: Date;

  public daysToDisplay: Date[];
  public hiddenDays: any[];

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              private entriesService: EntriesService,
              private formBuilder: FormBuilder,
              private utilis: UtilisService,
              private params: NavParams) {


    this.init();
  }

  public init() {


    let week = this.params.get("week");
    if(week) {
      this.startDay = week;
    }
    else {
      this.startDay = new Date();
    }
    this.startDay.setDate(this.startDay.getDate() - this.startDay.getDay());

    this.daysToDisplay = [];
    this.hiddenDays = [];

    this.endDay = new Date(this.startDay.getTime());
    this.endDay.setDate(this.endDay.getDate() + 7);
    this.pageTitle = this.utilis.getMonthName(this.startDay);

    for (let i = 0; i < 7; i++) {
      let dt = new Date(this.startDay.getTime());
      dt.setDate(dt.getDate() + i);
      if (this.entriesService.getEntriesInDay(dt).length) {
        this.daysToDisplay.push(dt);
      }
      else {
        this.hiddenDays.push({
          date: dt,
          name: this.utilis.getMonthName(dt) + " " + dt.getDate() + ", " + this.utilis.getDayName(dt.getDay())
        });
      }

      this.form = this.formBuilder.group({
        day: ['', [Validators.required]]
      });
    }
  }

  public addNewDay(): void {
    this.daySelector.open();
  }

  private daySelectorModalOptions: any = {
    enableBackdropDismiss: true,
    showBackdrop: true
  };

  private addDaySelectorChanged() {
    let formValue = this.form.value;
    let added: boolean = false;
    console.log(this.daysToDisplay);
    for (let i = 1; i < this.daysToDisplay.length; i++) {
      if (this.daysToDisplay[i] > formValue.day) {
        let dts: any = this.daysToDisplay;
        dts.splice(i, 0, formValue.day);
        added = true;
        break;
      }
    }
    if (!added) {
      this.daysToDisplay.push(formValue.day);
    }

    for (let i = 0; i < this.hiddenDays.length; i++) {
      if (this.hiddenDays[i].date.getTime() == formValue.day.getTime()) {
        this.hiddenDays.splice(i, 1);
        console.log("found at: " + i);
        break;
      }
    }

  }

  ngOnInit(): void {
    this.startDay = this.params.get("week");

    this.init();
  }

}
