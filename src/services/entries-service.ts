import {Injectable} from "@angular/core";
import {LocalStorageService} from "ng2-webstorage";
import {EntryModel} from "../models/entry-model";
import {UtilisService} from "./utilis-service";
import {view_utils} from "@angular/compiler/src/private_import_core";
/**
 * Created by NM on 3/11/2017.
 */

@Injectable()
export class EntriesService {
  private entries: EntryModel[] = null;

  constructor(private localStorage: LocalStorageService,
              private utilis: UtilisService) {
    this.loadEntries();
  }

  public getEntriesInInterval(startDate: Date, endDate: Date): EntryModel[] {
    this.loadEntries();
    let arr: EntryModel[] = [];
    this.entries.forEach(entry => {
      if (startDate < entry.date && entry.date < endDate) {
        arr.push(entry);
      }
    });
    return arr;
  }

  public getEntriesInDay(date: Date): EntryModel[] {
    this.loadEntries();
    let arr: EntryModel[] = [];
    this.entries.forEach(entry => {
      if (this.utilis.sameDay(date, entry.date)) {
        arr.push(entry);
      }
    });
    return arr;
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
    model.id = this.utilis.generateRandomString(20);
    allEntries.push(model);
    this.storeEntries();
  }

  private repopulateDates() {
    this.entries.forEach(entry => {
      if (entry.date && typeof entry.date == 'string') {
        entry.date = new Date(entry.date);
      }
    });
  }
}
