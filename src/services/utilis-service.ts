import {Injectable} from "@angular/core";
/**
 * Created by NM on 3/11/2017.
 */

@Injectable()
export class UtilisService {
  public generateRandomString(length?: number) {
    if (typeof length === 'undefined') {
      length = 10;
    }
    function randomString(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }

    return randomString(length);
  }

  public getDayName(dayIndex: number) {
    return this.days[dayIndex];
  }

  public sameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() == date2.getFullYear()
      && date1.getMonth() == date2.getMonth()
      && date1.getDate() == date2.getDate();
  }

  private days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
