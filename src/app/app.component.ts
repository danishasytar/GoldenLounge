import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FacilitiesPage } from '../pages/facilities/facilities';
import { MealPage } from '../pages/meal/meal';
import { RequestListPage } from '../pages/request-list/request-list';
import { MenuListPage } from '../pages/menu-list/menu-list';


import { RecceptionPage } from '../pages/recception/recception';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = RecceptionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToRecception(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RecceptionPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FacilitiesPage);
  }goToMeal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealPage);
  }goToRequestList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RequestListPage);
  }goToMenuList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MenuListPage);
  }
}
