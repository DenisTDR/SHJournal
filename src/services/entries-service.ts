import {Injectable} from "@angular/core";
import {LocalStorageService} from "ng2-webstorage";
import {EntryModel} from "../models/entry-model";
import {UtilisService} from "./utilis-service";
import {Calendar} from 'ionic-native';


/**
 * Created by NM on 3/11/2017.
 */

@Injectable()
export class EntriesService {
  private entries: EntryModel[] = null;

  constructor(private localStorage: LocalStorageService,
              private utilis: UtilisService) {
    this.loadEntries();

    // this.createCalendar();
  }

  private shCalendar: any;

  public createCalendar() {
    // Calendar.listCalendars().then(data => {
    //   let exists = false;
      // data.forEach(calendar => {
      //   if (calendar.name == "StudentHack") {
      //     exists = true;
      //   }
      // });
      // if (!exists) {
      //   console.log("creating calendar");
      //   Calendar.createCalendar('StudentHack').then(
      //     (msg) => {
      //       console.log('created calendar StudentHack');
      //       this.getCalendar();
      //     },
      //     (err) => {
      //       console.log('cant create calendar StudentHack');
      //     }
      //   );
      // }
      // else {
        this.getCalendar();
    //   }
    // }).catch(err => {
    //   console.log("err, ", err);
    // });
  }

  public getCalendar() {

    console.log("list calendars");
    Calendar.listCalendars().then(data => {
      console.log(data);
      data.forEach(calendar => {
        if (calendar.name == "denis.tdr@gmail.com") {
          console.log("got calendar, ", calendar);
          this.shCalendar = calendar;
        }
      });
    }).catch(err => {
      console.log("err, ", err);
    });
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
    if (model.isInCalendar) {
      this.addInCalendar(model);
    }
  }

  private repopulateDates() {
    this.entries.forEach(entry => {
      if (entry.date && typeof entry.date == 'string') {
        entry.date = new Date(entry.date);
      }
    });
  }

  public updateEntry(entry: EntryModel): void {
    this.loadEntries();
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].id == entry.id) {
        this.entries[i] = entry;
        this.storeEntries();
        break;
      }
    }
  }

  public addInCalendar(entry: EntryModel): void {
    console.log("had to add in calendar");

    let startDt = new Date(entry.date.getTime());
    startDt.setHours(0);
    startDt.setMinutes(0);
    startDt.setSeconds(0);
    let endDt = new Date(entry.date.getTime());
    endDt.setHours(23);
    endDt.setMinutes(59);
    endDt.setSeconds(59);
    console.log("createEvent");

    let calendarNote: string = entry.description ? entry.description : entry.name;

    console.log(entry.name, calendarNote, startDt, endDt, this.shCalendar);

    Calendar.createEventWithOptions(entry.name, "",
      calendarNote,
      startDt,
      endDt,
      this.shCalendar).then(data => {
      console.log("success,", data);
    }).catch(err => {
      console.log("err", err);
    });
  }

}
