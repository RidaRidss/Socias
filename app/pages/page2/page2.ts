import {Alert,Page, NavController} from 'ionic-angular';

import {socias} from './../socias/socias';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
//import session = require('express-session');
@Page({
  
templateUrl: 'build/pages/page2/page2.html'

})

export class Page2 {
users: FirebaseListObservable<any[]>;
//users : Array<{user:string,password:string}>=[];
 constructor(public nav: NavController,af: AngularFire) { 
this.users = af.list('/users');

}
signIN(user: HTMLInputElement,password: HTMLInputElement){
// Searching users in firebase later implementation
//console.log(this.users.value);
//console.log(this.users.key.value);
/*
if(user.value in this.users){  
let confirm = Alert.create({
      title: 'Hi ' + user.value + ' , Get Set GO?',
      message: 'Welcome To Socias',
      buttons: [
        {
          text: 'Back',
          handler: () => {
            console.log('Go Back');
          }
        },
        {
          text: 'Agree, GO!',
          handler: () => {
   this.nav.push(socias);
		}
        }
      ]
    });

    this.nav.present(confirm);
}
else{
console.log('user not found');
}

*/

let confirm = Alert.create({
      title: 'Hi ' + user.value + ' , Get Set GO?',
      message: 'Welcome To Socias',
      buttons: [
        {
          text: 'Back',
          handler: () => {
            console.log('Go Back');
          }
        },
        {
          text: 'Agree, GO!',
          handler: () => {
   this.nav.push(socias);
		}
        }
      ]
    });

    this.nav.present(confirm);

}
signUp(user : HTMLInputElement,password : HTMLInputElement){

//Create user in firebase implementation done !
let confirmation = Alert.create({title: 'Hey ' + user.value + ' , Sure?',message: 'Welcome To Socias Account',
buttons: [{text: 'Back',handler: () => {console.log('Go Back');}},{text: 'Agree',handler: () => {
 console.log('Your Account Created Successfully:'+ user.value);
 this.users.add(user.value);
//var User : users = new users(user.value,password.value);
//users.push(User);  
let success = Alert.create({title: 'Your Account Created Successfully',subTitle: 'Enjoy Socias!',
buttons: [{ text: 'Thank You!', handler: () => { this.nav.push(socias);}}]
});
this.nav.present(success);    
}}]});
this.nav.present(confirmation);
}
}