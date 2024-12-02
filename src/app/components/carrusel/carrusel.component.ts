import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  currentIndex: number = 0; // Índice de la imagen actual
  totalItems: number = 3; // Número total de imágenes
  translateX: number = 0; // Desplazamiento de la posición del carrusel

  // Función para mover el carrusel
  moveCarousel(direction: string) {
    if (direction === 'prev') {
      this.currentIndex = this.currentIndex === 0 ? this.totalItems - 1 : this.currentIndex - 1;
    } else {
      this.currentIndex = this.currentIndex === this.totalItems - 1 ? 0 : this.currentIndex + 1;
    }
    
    this.translateX = -(this.currentIndex * 100); // Desplazamos el carrusel
  }

}
