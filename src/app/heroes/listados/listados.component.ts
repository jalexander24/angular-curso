import { Component } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  //styleUrls: ['./listados.component.css']
})
export class ListadosComponent {

  heroes: string [] = ['Spiderma', 'Thor', 'Antman', 'Hola','Ciego'];
  heroeBorrado: string = '';
 
 
  borrarHeroe(){
    //console.log('Borrando...')
    //this.heroes.pop();
    
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }
}
