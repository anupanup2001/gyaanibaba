import { NgModule } from '@angular/core';
import {
    MdcTopAppBarModule,
    MdcIconModule
} from '@angular-mdc/web';
@NgModule({
    exports: [
        MdcTopAppBarModule,
        MdcIconModule
    ]
})
export class AppMaterialModule { }
