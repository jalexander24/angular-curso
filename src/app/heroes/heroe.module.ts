import { NgModule } from '@angular/core';
import { HereoComponent } from './heroe/heroe.component';
import { ListadosComponent } from './listados/listados.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HereoComponent,
        ListadosComponent
    ],
    exports: [
        ListadosComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}