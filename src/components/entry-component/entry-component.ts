
import {NavController} from "ionic-angular";
import {Component, OnChanges, SimpleChanges} from "@angular/core";
@Component({
  selector: 'journal-entry',
  templateUrl: 'entry-component.html',
  inputs: ["data"]
})
export class EntryComponent implements OnChanges {

  public data: any = {};

  constructor(public navCtrl: NavController) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changed data to: ");
    console.log(this.data);
  }

}
