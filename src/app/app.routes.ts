import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CartaComponent } from './components/carta/carta.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

export const routes: Routes = [
    {path: '', component: InicioComponent },
    {path: 'carta', component:CartaComponent},
    {path: 'pics', component: CarruselComponent}
];
