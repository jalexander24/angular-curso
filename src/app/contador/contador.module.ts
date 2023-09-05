import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contardor.component";


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        
    ]
})
export class ContadorModule {}