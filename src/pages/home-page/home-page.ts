import {Component, ElementRef, ViewChild} from "@angular/core";
import {NavController, NavParams, Gesture} from 'ionic-angular';
import {WeekPage} from "../week-page/week-page";
/**
 * Created by NM on 3/11/2017.
 */


@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

  onPageWillEnter() {

  }

  constructor(private navCtrl: NavController) {

  }

  public newPage(): void {
    this.navCtrl.push(WeekPage);
  }
}
