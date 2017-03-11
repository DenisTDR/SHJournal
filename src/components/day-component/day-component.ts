import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {EntryConfig} from "../entry-creator/entry-config";
import {EntryModel} from "../../models/entry-model";
import {UtilisService} from "../../services/utilis-service";

@Component({
  selector: 'day-component',
  templateUrl: 'day-component.html',
  inputs: ["date"]
})
export class DayComponent implements OnInit, OnChanges {

  public date: Date;
  public dayName: string = "undefined";

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private utilis: UtilisService) {

  }

  public entries: EntryModel[] = [
    {name: "prima", type: "task"}
  ];

  ngOnInit(): void {
    this.ngOnChanges(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.date){
      return;
    }

    this.dayName = this.utilis.getDayName(this.date.getDay());
  }

  private addEntry() {
    let profileModal = this.modalCtrl.create(EntryConfig, {}, this.entryConfigOptions);
    profileModal.onDidDismiss(data => {
      if (!data || !data.entry) {
        return;
      }
      let entry: EntryModel = data.entry;
      // entry.date = this.date;
      this.entries.push(data);
    });
    profileModal.present();

  }

  private entryConfigOptions: any = {
    enableBackdropDismiss: true,
    showBackdrop: true
  };

}
