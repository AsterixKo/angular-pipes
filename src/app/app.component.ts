import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';

  nombre: string = 'Horse Luis';
  listaCompra: string[] = ['Lentejas', 'Garbanzos', 'Judías', 'Atún', 'Humus', 'Cerveza'];
  nombreLargo: string = 'Esternocleidomastoideo';
  PI: number = Math.PI;
  habitantes: number = 12.234387857383838383;
  numPasajero: number = 7;
  iva: number = 0.21;
  salario: number = 21000.50;

  personaje = {
    nombre: 'Tenacitas',
    serie: 'Los Simpsons',
    propietario: 'Homer',
    familia: {
      primo: 'Nemo',
      hermano: 'Klab kalash'
    }
  }

  dataLoader = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Aquí tienes tus datos');
    }, 3000);
  });

  fecha: Date = new Date();

  nombreMinusculas:string = 'anacleto panfleto';

  videoUrl:string = 'https://www.youtube.com/embed/Gin0eBR-Uvg';
}
