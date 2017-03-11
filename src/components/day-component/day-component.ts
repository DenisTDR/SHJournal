import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {EntryConfig} from "../../components/entry-creator/entry-config";
import {EntryModel} from "../../models/entry-model";

@Component({
  selector: 'day-component',
  templateUrl: 'day-component.html',
  inputs: ["day"]
})
export class DayComponent implements OnInit, OnChanges {

  public day: Date;
  public dayName: string = "undefined";

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  public entries: EntryModel[] = [
    {name: "prima", type: "task"}
  ];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dayName = this.day.toString().split(' ')[0];
  }

  private addEntry() {
    let profileModal = this.modalCtrl.create(EntryConfig, {}, this.entryConfigOptions);
    profileModal.onDidDismiss(data => {
      if (!data || !data.entry) {
        return;
      }
      let entry: EntryModel = data.entry;
      entry.date = this.day;
      this.entries.push(data);
    });
    profileModal.present();

  }

  private entryConfigOptions: any = {
    enableBackdropDismiss: true,
    showBackdrop: true
  };

}
