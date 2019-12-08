import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

    contactArray = [{name: 'Sun', telephone: '0869635082', imageUr: 'assets/imgs/boy4.jpg'}
      ,{name: 'Frame', telephone: '0869635XXX', imageUr: 'assets/imgs/boy3.jpg'}
      ,{name: 'Boss', telephone: '0869635XXX', imageUr: 'assets/imgs/boy1.jpg'}
      ,{name: 'Kee', telephone: '0869635XXX', imageUr: 'assets/imgs/boy2.jpg'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }



}//end class
