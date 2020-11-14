import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  
  ngOnInit() {
  }
  
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text:'ok',
        handler:() =>{
          console.log("click ok");
        }
      }]
    });

    await alert.present();
  }

}
