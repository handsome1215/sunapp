import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginResult
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(i_username,i_password){
    alert("Hello"+" "+i_username+"  "+" Say Hi");
    if(i_password == '1234'){
      this.loginResult = "Welcome "+i_username;
      this.navCtrl.push("PhoneBookPage");
    }else{
      this.loginResult = "Failed : Try agin!!!";
    }
    
  }


}//end
