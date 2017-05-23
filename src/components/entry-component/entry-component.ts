import {NavController, ModalController} from "ionic-angular";
import {Component, OnChanges, SimpleChanges, EventEmitter} from "@angular/core";
import {EntryTypeService} from "../../services/entry-type-service";
import {EntryModel} from "../../models/entry-model";
import {EntryConfig} from "../entry-config/entry-config";
import {EntriesService} from "../../services/entries-service";
import {UtilisService} from "../../services/utilis-service";
@Component({
  selector: 'journal-entry',
  templateUrl: 'entry-component.html',
  inputs: ["data"],
  outputs: ["changed"]
})
export class EntryComponent implements OnChanges {

  public data: EntryModel = null;
  private entryType: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private entryTypeService: EntryTypeService,
              private entriesService: EntriesService,
              private utilis: UtilisService) {

  }

  public changed: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("changed data to: ");
    // console.log(this.data);

    this.entryType = this.entryTypeService.getType(this.data.type);


  }

  public toggleCompleted($event): void {
    $event.preventDefault();
    this.data.completed = !this.data.completed;
    this.entriesService.updateEntry(this.data);
  }

  public openConfigModal(): void {
    let entryModal = this.modalCtrl.create(EntryConfig, {entry: this.data}, this.entryConfigOptions);
    entryModal.onDidDismiss(data => {
      // console.log(data);
      if (data && data.entry) {
        let entry: EntryModel = data.entry;
        this.entriesService.updateEntry(entry);
        if (!this.utilis.sameDay(entry.date, this.data.date)) {
          this.changed.emit({entry: entry});
        }
        this.data = entry;
        this.entryType = this.entryTypeService.getType(entry.type);
      }
    });
    entryModal.present();
  }

  private entryConfigOptions: any = {
    enableBackdropDismiss: true,
    showBackdrop: true
  };
}
