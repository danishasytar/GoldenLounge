import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestListPage } from '../request-list/request-list';
import { MenuListPage } from '../menu-list/menu-list';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {

 films: Observable<any>;
  constructor(public navCtrl: NavController, private http: Http) {
  }
  goToRequestList(params){
    if (!params) params = {};
    this.navCtrl.push(RequestListPage);
  }goToMenuList(params){
      this.films = this.http.post('https://reqres.in/api/users', {
        "name": "morpheus",
     "job": "leader"
      },{} );
          this.films
          .map(res => res.json())
          .subscribe(data => {
            console.log('my data: ', data);
          })


  }
}
