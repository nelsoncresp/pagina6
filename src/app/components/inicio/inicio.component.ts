import { Component } from '@angular/core';
import { CarruselComponent } from "../carrusel/carrusel.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  // Fecha desde la que quieres iniciar el contador
  fechaInicial: Date = new Date('2024-05-31T00:00:00'); // Cambia esta fecha según tu necesidad

  ngOnInit(): void {
    this.calcularDiferencia();
    setInterval(() => this.calcularDiferencia(), 1000);
  }

  calcularDiferencia(): void {
    const ahora = new Date().getTime();
    const inicial = this.fechaInicial.getTime();
    const diferencia = ahora - inicial;

    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);

    this.dias = diasTotales;
    this.horas = horasTotales % 24;
    this.minutos = minutosTotales % 60;
    this.segundos = segundosTotales % 60;
  }
  showAlert() {
    window.alert('Eres la mujer más hermosa mi amore 🥰🥰');
  }
}
