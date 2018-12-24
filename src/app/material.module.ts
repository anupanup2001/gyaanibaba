import { NgModule } from '@angular/core';
import {
  MdcTopAppBarModule,
  MdcIconModule,
  MdcButtonModule,
  MdcFabModule,
  MdcCardModule, MdcTypographyModule
} from '@angular-mdc/web';
@NgModule({
    exports: [
      MdcTopAppBarModule,
      MdcIconModule,
      MdcButtonModule,
      MdcFabModule,
      MdcCardModule,
      MdcTypographyModule
    ]
})
export class AppMaterialModule { }
