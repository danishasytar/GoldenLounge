import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RecceptionPage } from '../pages/recception/recception';
import { MealPage } from '../pages/meal/meal';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { RequestListPage } from '../pages/request-list/request-list';
import { MenuListPage } from '../pages/menu-list/menu-list';
import { NotiPage } from '../pages/noti/noti';
import { ModalPage } from '../pages/modal-page/modal-page';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RecceptionPage,
    MealPage,
    FacilitiesPage,
    RequestListPage,
    MenuListPage,
    NotiPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecceptionPage,
    MealPage,
    FacilitiesPage,
    RequestListPage,
    MenuListPage,
    NotiPage,
    ModalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}