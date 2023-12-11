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




  mostrarCrearComponente = true;
  mostrarLeerQRComponente = false;
  mostrarLeerImagenComponente = false;

  mostrarCrear() {
    this.mostrarCrearComponente = true;
    this.mostrarLeerQRComponente = false;
    this.mostrarLeerImagenComponente = false;
  }

  mostrarLeerQR() {
    this.mostrarCrearComponente = false;
    this.mostrarLeerQRComponente = true;
    this.mostrarLeerImagenComponente = false;
  }

  mostrarLeerImagen() {
    this.mostrarCrearComponente = false;
    this.mostrarLeerQRComponente = false;
    this.mostrarLeerImagenComponente = true;
  }
}
