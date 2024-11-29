import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
// import { AuthService } from '../auth.service';

// import { Globals } from 'src/app/utilerias/services/globals';
// import { SweetAlertComponent } from 'src/app/shared/SweetMesssage';
// import { MensajesFijosEnum } from 'src/app/utilerias/enums/mensajes-fijos-enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  usuario: string | undefined;
  username: string = '';
  password: string = '';
  email: string | undefined;
  mostrarInicio: boolean | undefined;

  constructor(
    // private authService: AuthService,
    private authService: AuthService,
    private router: Router,
    // private globals: Globals,
    // private mensaje: SweetAlertComponent
    ) {
    // if (this.authService.isAuthenticated()) {
    //   this.router.navigate(['dashboard']);
    // }
  }

  ngOnInit() {
    this.usuario = '';
    this.password = '';
    this.email = '';
    this.mostrarInicio = true;

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
    /* setTimeout(function () {
       card.classList.remove('card-hidden');
     }, 700);*/
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }


  onSignin(form: NgForm) {

    if (this.validaExplorer()) {
      // swal({
      //   text: 'Se recomienda no usar Internet Explorer o variaciones de este para el correcto funcionamiento del sitio.',
      //   type: 'warning',
      //   showCancelButton: false,
      //   confirmButtonClass: 'btn btn-gerdau',
      //   confirmButtonText: 'Aceptar',
      //   buttonsStyling: false
      // }).then((result:any) => {
      //   this.usuario = this.eliminarVacios(this.usuario!);
      //   this.password = this.eliminarVacios(this.password!);
      //   if (this.usuario != null && this.password != null) {
      //     this.authService.loginUser(this.usuario, this.password, window.navigator.userAgent);
      //   }
      // });
    } else {
      this.usuario = this.eliminarVacios(this.usuario!);
      this.password = this.eliminarVacios(this.password!);
      // if (this.usuario != null && this.password != null) {
      //   this.authService.loginUser(this.usuario, this.password, this.getBrowserName() + '  AGENTE ::' + window.navigator.userAgent);
      // }
    }
  }

  siguiente(event: any) {
    const element = event.valueAccessor._elementRef.nativeElement; // get the sibling element
    if (element == null) {  // check if its null
      return;
    } else {
      element.focus();   // focus if not null
    }
  }

  mostrarFrmContrasena() {
    this.email = "";
    this.password = "";
    this.usuario = "";
    this.mostrarInicio = !this.mostrarInicio;
  }

  confirmarRecuperacion(frmEmail: any) {
    this.email = this.eliminarVacios(this.email!);
    if (frmEmail.valid && this.email !== "") {
      // swal({
      //   text: MensajesFijosEnum.CONFIRMACION_RECUPERACION_CONTRASENA,
      //   type: 'warning',
      //   showCancelButton: true,
      //   confirmButtonClass: 'btn btn-gerdau',
      //   cancelButtonClass: 'btn btn-gerdau',
      //   confirmButtonText: 'Aceptar',
      //   cancelButtonText: 'Cancelar',
      //   buttonsStyling: false
      // }).then((result) => {
      //   if (result.value) {
      //     this.validarEmail();
      //   }
      // });
    }
  }

  private validarEmail() {
    // this.authService.obtenerElementoPorElemento('recoveryPassword.do', this.email).toPromise().then(response => {
    //   const status = (response != null && response !== undefined) ? response : false;
    //   if (status) {
    //     // this.mensaje.showSwal('info-only-message', MensajesFijosEnum.RECUPERACION_CONTRASENA);
    //     this.email = "";
    //     this.mostrarFrmContrasena();
    //   } else {
        // this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
      // }
    // }).catch(reponse => {
      // this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    // });
  }

  private eliminarVacios(valor: string): string {
    if (valor !== undefined && valor !== null && valor.trim() !== '') {
      return valor.trim();
    } else {
      return "";
    }
  }

  private validaExplorer() {
    return /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('trident') > -1:
        return 'trident';
      case agent.indexOf('msie') > -1:
        return 'msie';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
  async login() {
    try {
        await this.authService.login(this.username, this.password);
        window.location.href = '/home'; // Redirige después del login
    } catch {
        alert('Credenciales inválidas');
    }
}

}
