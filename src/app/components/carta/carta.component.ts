import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  cardTop: string = '5px'; // Posición inicial de la tarjeta
  isCardUp: boolean = false; // Estado de la tarjeta (arriba/abajo)

  // Eventos para escritorio (hover)
  onMouseEnter(): void {
    if (!this.isCardUp) {
      this.cardTop = '-90px'; // Subir la tarjeta
    }
  }

  onMouseLeave(): void {
    if (!this.isCardUp) {
      this.cardTop = '5px'; // Bajar la tarjeta
    }
  }

  // Alternar la posición de la tarjeta en dispositivos móviles
  toggleCardPosition(): void {
    if (window.innerWidth <= 768) { // Verificar si es móvil
      this.isCardUp = !this.isCardUp;
      this.cardTop = this.isCardUp ? '-90px' : '5px'; // Alternar posición
    }
  }
}
