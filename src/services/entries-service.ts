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
  }

  public getEntriesInInterval(startDate: Date, endDate: Date): EntryModel[] {

    return [];
  }

  public getAllEntries(): EntryModel[] {
    if(this.entries) {
      return this.entries;
    }

    let existing = this.localStorage.retrieve("storedEntries");
    if (existing) {
      this.entries = existing;
    }
    else {
      this.entries = [];
    }
    return this.entries;
  }

  public storeEntries(entries: EntryModel[]) {
    this.localStorage.store("storedEntries", entries);
  }


  public addEntry(model: EntryModel) {
    var allEntries = this.getAllEntries();
    allEntries.push()
  }
}
