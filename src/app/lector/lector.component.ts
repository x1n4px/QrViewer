import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgxQrcodeReaderModule } from 'ngx-qrcode-reader';


@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.css']
})
export class LectorComponent {
  @ViewChild('video', { static: false }) videoElement!: ElementRef;
  video: any;
  cameraStream: any;

  ngOnInit() {
    // Inicia la cámara cuando se carga el componente
    this.iniciarCamara();
  }

  iniciarCamara() {
    // Obtén el elemento de video y solicita acceso a la cámara
    this.video = this.videoElement.nativeElement;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.cameraStream = stream;
        this.video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error al acceder a la cámara: ', error);
      });
  }

  detenerCamara() {
    // Detén la transmisión de la cámara
    if (this.cameraStream) {
      const tracks = this.cameraStream.getTracks();
      tracks.forEach(track => track.stop());
    }
  }

  // Función para manejar el evento de lectura de QR
  manejarLecturaQR(result: string) {
    console.log('Código QR leído:', result);

    // Puedes hacer lo que quieras con el resultado, como mostrarlo en tu interfaz de usuario.
    // Aquí, simplemente lo imprimiré en la consola.
  }
}
