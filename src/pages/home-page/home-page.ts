import {Component, OnInit} from "@angular/core";
import {NavController} from 'ionic-angular';
import {WeekPage} from "../week-page/week-page";
import {MonthPage} from "../month-page/month-page";
/**
 * Created by NM on 3/11/2017.
 */


@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage implements OnInit{
  ngOnInit(): void {

    setTimeout(() => {
      this.crtWeek();
      // this.crtMonth();
    }, 100);
  }

  onPageWillEnter() {
  }

  constructor(private navCtrl: NavController) {

  }

  public crtWeek(): void {
    this.navCtrl.push(WeekPage);
  }
  public crtMonth(): void {
    this.navCtrl.push(MonthPage);
  }
}
