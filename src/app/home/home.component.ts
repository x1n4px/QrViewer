import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
