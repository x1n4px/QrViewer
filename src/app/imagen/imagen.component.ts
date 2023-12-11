import { Component } from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  url: any = '';
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (context) {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);

            const imageData = context.getImageData(0, 0, image.width, image.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
              console.log('Código QR detectado:', code.data);
              this.url = code.data;
              // Puedes usar code.data como enlace o realizar otra acción
            } else {
              console.log('No se pudo detectar un código QR en la imagen.');
            }
          }
        };
      };

      reader.readAsDataURL(file);
    }
  }

}
