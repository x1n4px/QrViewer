import { Component } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  mostrarInput: boolean = false;
  urlInput: string = ''; // Variable para almacenar la URL introducida
  codigoQR: string = ''; // Variable para almacenar el código QR generado

  ngOnInit(): void {
  }




  generarQR(): void {
    const tipoQR = QRCode(0, 'L');
    tipoQR.addData(this.urlInput);
    tipoQR.make();

    const modulo = 10;
    this.codigoQR = tipoQR.createImgTag(modulo);
    console.log(this.codigoQR); // Imprime en la consola para verificar el contenido
    this.mostrarInput = false;
  }


  llamarFuncion() {
    throw new Error('Method not implemented.');
  }
  mostrarCrear() {
    this.mostrarInput = true;
  }

}
