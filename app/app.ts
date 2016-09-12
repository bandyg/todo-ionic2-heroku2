import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
  , providers: [
    {provide: Window, useValue: window},
    {provide: 'APP_CONFIG', useValue: {
      apiEndpoint: "https://agile-gorge-78729.herokuapp.com",
    }}
  ]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform
    , window: Window
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
