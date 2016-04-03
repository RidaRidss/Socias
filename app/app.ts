import {App, Platform} from 'ionic-angular';

import {StatusBar} from 'ionic-native';

import {TabsPage} from './pages/tabs/tabs';


import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

@App({

  template: '<ion-nav [root]="rootPage"></ion-nav>',
  
providers : [FIREBASE_PROVIDERS, defaultFirebase('https://ridss-angular2-ionic2.firebaseio.com/')],

config: {} // http://ionicframework.com/docs/v2/api/config/Config/

})

export class MyApp {
  
rootPage: any = TabsPage;

 
 constructor(platform: Platform) {

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
     
 // Here you can do any higher level native things you might need.
     
 StatusBar.styleDefault();

    });

  }

}
