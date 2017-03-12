import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';


import {WeekPage} from "../pages/week-page/week-page";
import {HomePage} from "../pages/home-page/home-page";
import {MonthPage} from "../pages/month-page/month-page";
import {JournalPagePage} from "../pages/journal-page/journal-page";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WeekPage;

  pages: Array<{title: string, component: any, params?: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // {title: 'Home page', component: HomePage},
        {title: 'Current week', component: WeekPage, params: {week: new Date()}},
      {title: 'Current month', component: MonthPage, params: {week: new Date()}},
      {title: 'Journal', component: JournalPagePage, }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.params) {
      this.nav.setRoot(page.component, page.params);
    }
    else {
      this.nav.setRoot(page.component);
    }
  }
}
