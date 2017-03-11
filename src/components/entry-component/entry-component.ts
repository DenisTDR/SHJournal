
import {NavController} from "ionic-angular";
import {Component, OnChanges, SimpleChanges} from "@angular/core";
import {EntryTypeService} from "../../services/entry-type-service";
import {EntryModel} from "../../models/entry-model";
@Component({
  selector: 'journal-entry',
  templateUrl: 'entry-component.html',
  inputs: ["data"]
})
export class EntryComponent implements OnChanges {

  public data: EntryModel = null;
  private entryType: any;

  constructor(public navCtrl: NavController,
              private entryTypeService:EntryTypeService ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("changed data to: ");
    // console.log(this.data);

    this.entryType=this.entryTypeService.getType(this.data.type);


  }

  private toggleCompleted(): void {
    this.data.completed = !this.data.completed;
  }

}
