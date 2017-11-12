import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NotiPage } from '../noti/noti';
import { ModalPage } from '../modal-page/modal-page';



@Component({
  selector: 'page-recception',
  templateUrl: 'recception.html'
})
export class RecceptionPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  goNoti(params){
    if (!params) params = {};
    this.navCtrl.push(NotiPage);
  }

  openBasicModal() {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }
  
  
}
