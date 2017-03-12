import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EntriesService} from "../../services/entries-service";
import {EntryModel} from "../../models/entry-model";

/*
  Generated class for the JournalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-journal-page',
  templateUrl: 'journal-page.html'
})
export class JournalPagePage {


  private journalEntries:EntryModel[]= [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doMock();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalPagePage');
  }

  private doMock() {
    this.journalEntries.push({
      name: "This is my first journal post",
      type: "Journal Entry",
      date: new Date(10/3/2017),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu laoreet diam, luctus posuere enim. Cras auctor nunc at risus faucibus maximus. Nam malesuada luctus mi et fermentum. Suspendisse commodo nibh eget ipsum pharetra, eu tempus diam ullamcorper. Nunc egestas, massa a tincidunt hendrerit, diam neque ultrices nulla, id eleifend est nibh eu augue. Morbi convallis urna neque, quis laoreet urna euismod sed. Donec hendrerit, velit ac lacinia luctus, orci purus placerat nibh, eget rhoncus leo metus a turpis. Praesent accumsan id nisl non tristique. Sed non consectetur ligula. Mauris nulla magna, ultrices quis erat ac, tristique tincidunt quam. Mauris eu sapien eget magna auctor dictum."
    });
    this.journalEntries.push({
      name: "This is my second one",
      type: "Journal Entry",
      date: new Date(),
      description: "Nullam eu laoreet diam, luctus posuere enim. Cras auctor nunc at risus faucibus maximus. Nam malesuada luctus mi et fermentum. Suspendisse commodo nibh eget ipsum pharetra, eu tempus diam ullamcorper. Nunc egestas, massa a tincidunt hendrerit, diam neque ultrices nulla, id eleifend est nibh eu augue. Morbi convallis urna neque, quis laoreet urna euismod sed. Donec hendrerit, velit ac lacinia luctus, orci purus placerat nibh, eget rhoncus leo metus a turpis. Praesent accumsan id nisl non tristique. Sed non consectetur ligula. Mauris nulla magna, ultrices quis erat ac, tristique tincidunt quam. Mauris eu sapien eget magna auctor dictum."
    });
  }
}
