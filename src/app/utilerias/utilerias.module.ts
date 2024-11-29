// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directivas
import { SoloNumeroEnteroDirective } from './directives/solo-numero-entero.directive';
import { SoloNumeroDecimalDirective } from './directives/solo-numero-decimal.directive';
import { SoloLetraEspacioDirective } from './directives/solo-letra-espacio.directive';
import { SoloMayusculaNumeroDirective } from './directives/solo-letra-mayuscula-numero';
import { SoloLetraEspacioNumeroAcentoDirective } from './directives/solo-letra-espacio-numero-acento.directive';
import { TarjetaDirective } from './directives/tarjeta.directive';
import { TelefonoDirective } from './directives/telefono.directive';
import { AutofocusDirective } from './directives/auto-focus.directive';

// Mascara
// import { MaskLoadingComponent } from './mask-loading/mask-loading.component';

// Pipe
import { SoloNumeroDecimalPipe } from './pipes/solo-numero-decimal.pipe';

// Service
// import { Globals } from './services/globals';
import { SoloLetraGuionDirective } from './directives/solo-letra-guion.directive';
// import { MaskComponent } from './mask/mask.component';
import { UtilityService } from './services/utility.service';
// import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // MatProgressSpinnerModule
  ],
  declarations: [
    SoloNumeroEnteroDirective,
    SoloNumeroDecimalDirective,
    SoloLetraEspacioDirective,
    SoloMayusculaNumeroDirective,
    SoloLetraEspacioNumeroAcentoDirective,
    SoloLetraGuionDirective,
    TarjetaDirective,
    TelefonoDirective,
    AutofocusDirective,
    SoloNumeroDecimalPipe,
    // MaskLoadingComponent,
    // MaskComponent
  ],
  exports: [
    SoloNumeroEnteroDirective,
    SoloNumeroDecimalDirective,
    SoloLetraEspacioDirective,
    SoloLetraGuionDirective,
    SoloMayusculaNumeroDirective,
    SoloLetraEspacioNumeroAcentoDirective,
    TarjetaDirective,
    TelefonoDirective,
    AutofocusDirective,
    SoloNumeroDecimalPipe,
    // MaskLoadingComponent,
    // MaskComponent
  ],
  providers: [SoloNumeroDecimalPipe,
    //  Globals, 
     UtilityService],
  // entryComponents:[MaskComponent]
})
export class UtileriasModule {
}
