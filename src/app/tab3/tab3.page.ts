import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
valor1 = '';
valor2 = '';
resultado = '';
  
constructor(private alertController: AlertController) {}

  async soma() {
    
    let soma = this.valor1 + this.valor2;

    let msg='<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${soma} </p>`
    

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async subtrair() {
    let msg='<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${this.resultado} </p>`;
    

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }


  
  async multiplicar() {
    let msg='<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${this.resultado} </p>`;
    

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }


  
  async maior() {
    let msg='<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${this.resultado} </p>`;
    

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async menor() {
    let msg='<p><b>Valor 1: </b>' + this.valor1 + '</p>';
    msg += `<p><b>Valor 2: </b> ${this.valor2} </p>`;
    msg += `<p><b>Resultado: </b> ${this.resultado} </p>`;
    

    const alert = await this.alertController.create({
      header: 'RESULTADO',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
