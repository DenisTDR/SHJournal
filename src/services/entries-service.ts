import {Injectable} from "@angular/core";
import {LocalStorageService} from "ng2-webstorage";
import {EntryModel} from "../models/entry-model";
/**
 * Created by NM on 3/11/2017.
 */

@Injectable()
export class EntriesService {
  private entries: EntryModel[] = null;

  constructor(private localStorage: LocalStorageService) {
    this.loadEntries();
  }

  public getEntriesInInterval(startDate: Date, endDate: Date): EntryModel[] {
    this.loadEntries();
    var arr:EntryModel[] = [];

    return [];
  }

  public getAllEntries(): EntryModel[] {
    this.entries || this.loadEntries();
    return this.entries || [];
  }

  public loadEntries(): void {
    if (this.entries !== null) {
      return;
    }
    this.entries = this.localStorage.retrieve("storedEntries") || [];
    this.repopulateDates();
  }

  public storeEntries() {
    this.localStorage.store("storedEntries", this.entries);
  }

  public addEntry(model: EntryModel) {
    let allEntries = this.getAllEntries();
    allEntries.push(model);
    this.storeEntries();
  }

  private repopulateDates() {
    this.entries.forEach(entry => {
      if(entry.date && typeof entry.date == 'string') {
        entry.date = new Date(entry.date);
      }
    });
  }
}
