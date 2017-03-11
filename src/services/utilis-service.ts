import {Injectable} from "@angular/core";
/**
 * Created by NM on 3/11/2017.
 */

@Injectable()
export class UtilisService {
  public generateRandomString(length?:number) {
    if(typeof length === 'undefined') {
      length = 10;
    }
    function randomString(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
    return randomString(length);
  }
}
