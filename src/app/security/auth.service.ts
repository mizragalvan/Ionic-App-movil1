import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Menu } from '../shared/model/security/menu.model';

import { environment } from 'src/environments/environment';

// import { SweetAlertComponent } from '../shared/SweetMesssage';
import { MensajesFijosEnum } from 'src/app/utilerias/enums/mensajes-fijos-enum';
import { WebSocketAPIService } from './WebSocketAPI';
import { Usuario } from '../shared/model/security/usuario.model';
// import { ConsultaList } from '../shared/model/consultaList.model';


// const API_URL = environment.apiUrl;
@Injectable()
export class AuthService {
  // ListUsuario:ConsultaList= new ConsultaList();
  ListUsuario:any;
  DatosUsuario:Usuario| undefined;
  idUser:boolean=false;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
    // private mensaje: SweetAlertComponent,
    private webSocketAPIService: WebSocketAPIService) { }

  /**
    * Método en cargado de crear la ruta completa para las peticiones
    * @param url // url del recurso al que se desea acceder
    */
  obtenerRutaCompleta = function (url: string) {
    // return API_URL + 'controller/' + url;
  };

  private obtenerEncabezados = function () {
    return new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  };

  loginUser(usuario: string, password: string, navegador: string) {
    sessionStorage.setItem("userName", usuario);
    sessionStorage.setItem("pass", password);
    // this.http.post<any[]>(this.obtenerRutaCompleta('login.go'), { username: usuario, password: password, browser: navegador }, {
    //   headers: this.obtenerEncabezados(),
    //   responseType: 'json',
    //   observe: 'response'
    // }).toPromise().then(resp => {
    //   const status = resp.headers.get('COD_STATUS');
    //   if (status !== null && status !== undefined && status === 'OK') {
    //     localStorage.setItem('token', resp.headers.get('x-auth-token'));
    //     this.webSocketAPIService.connect();
    //     this.obtenerFlujos();
    //   } else {
        // this.mensaje.showSwal('info-only-message', MensajesFijosEnum.ERROR_SERVIDOR);
    //   }
    // }).catch(reponse => {
    //   this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    // });
  }

  logout() {
    this.webSocketAPIService.disconnect();
    // setTimeout(() => {
    //   this.obtenerElemento('closeSession.do').toPromise().then(response => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('menuItems');
    //     localStorage.removeItem('showFlow');
    //     localStorage.removeItem('validFlow');
    //     this.router.navigate(['security/login']);
    //   }).catch(reponse => {
    //     // this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    //     this.router.navigate(['security/login']);
    //   });
    // }, 1000);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

  isActivated() {
    return (localStorage.getItem('pEstatus') != null && localStorage.getItem('pEstatus') === 'SOLICITUD');
  }

  validFlowSelected() {
    return (localStorage.getItem('validFlow') != null && localStorage.getItem('validFlow') === 'TRUE');
  }

//   validateSesion(): Observable<any> {
    validateSesion(){
    this.userGerente();
    // return this.http.post(this.obtenerRutaCompleta('validateSession.do'), {}, {
    //   headers: this.obtenerEncabezados(),
    //   responseType: 'json'
    // });
  }

//   getMenuList(): Menu[] {
    getMenuList(){
    const retrievedObject = localStorage.getItem('menuItems');
    // return JSON.parse(retrievedObject);
  }

  getMenus() {
    // this.obtenerElemento('profile/obtenerMenuPorPerfil.do').toPromise().then(response => {
      // console.log('datos de item : ',response.list);
      // if (response !== null && response !== undefined && response.list.length > 0) {
        // localStorage.setItem('menuItems', JSON.stringify(response.list));
        this.router.navigate(['dashboard']);
      // } else {
        localStorage.setItem('menuItems', JSON.stringify([]));
        this.router.navigate(['dashboard']);
      // }
    // }).catch(reponse => {
      //   this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    // });
  }

  obtenerFlujos() {
    // this.obtenerElemento('profiling/findFlowsByUserProfiles.do').toPromise().then(response => {
      localStorage.setItem('showFlow', 'FALSE');
      localStorage.setItem('validFlow', 'TRUE');
      this.getMenus();
    // }).catch(() => {
      //   this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    // });
  }

//   obtenerElemento(url: string): Observable<any> {
  obtenerElemento(url: string) {
    // return this.http.post<any>(this.obtenerRutaCompleta(url), null, {
    //   headers: this.obtenerEncabezados(),
    //   responseType: 'json'
    // });
  }

//   obtenerElementoPorElemento(url: string, elemento: any): Observable<any> {
    obtenerElementoPorElemento(url: string, elemento: any) {
    // return this.http.post<any>(this.obtenerRutaCompleta(url), elemento, {
    //   headers: this.obtenerEncabezados(),
    //   responseType: 'json'
    // });
  }

  mostrarFlujo() {
    return (localStorage.getItem('showFlow') != null && localStorage.getItem('showFlow') === 'TRUE');
  }

  quitarFlujo() {
    localStorage.setItem('validFlow', 'FALSE');
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    // this.http.post(this.obtenerRutaCompleta('cargaArchivo.do'), formData, {}).subscribe();
  }

//   validConexion() {
//     this.webSocketAPIService.validConexion();
//   }

  revisaMenu(url: string) {
    const menuItems = this.getMenuList();
    // for (let i = 0; i < menuItems.length; i++) {
    //   if (menuItems[i].factory === url) {
    //     return true;
    //   } 
    //   if (menuItems[i].subMenu.length > 0) {
    //     for (let j = 0; j < menuItems[i].subMenu.length; j++) {
    //       if (menuItems[i].subMenu[j].factory === url) {
    //         return true;
    //       }
    //     }
    //   }
    // }
    return false;
  }

  retirnaLogin() {
    this.router.navigate(['security/login']);
  }
  userGerente(){
    
    // var token=localStorage.getItem('token');
    // var usuario=sessionStorage.getItem("userName");
    // if(token==null || token=="" || token==undefined){
    //   this.logout();
    //   swal({
    //     type: 'warning',
    //     title: 'Su sesión ha caducado',
    //     buttonsStyling: false,
    //     confirmButtonClass: 'btn btn-warning',
    //     confirmButtonText: 'Aceptar',
    //   });
    // }else{
    //   this.http.post(this.obtenerRutaCompleta('validateGerente.do'), { isLawyer: true }).toPromise().then(resp => {
    //     console.log('lista ::: ',resp);
    //     this.ListUsuario=resp;
    //     this.DatosUsuario=this.ListUsuario.list;
    //     console.log('DatosUsuario :::::: ',this.DatosUsuario);
    //     console.log('idProfile :::::: ',this.DatosUsuario[0].idProfile);
    //     console.log('IdArea :::::: ',this.DatosUsuario[0].idArea);
    //     console.log('positionName :::::: ',this.DatosUsuario[0].positionName);
    //     localStorage.setItem('IdProfile', this.DatosUsuario[0].idProfile);
    //     localStorage.setItem('IdArea', this.DatosUsuario[0].idArea);
    //     localStorage.setItem('positionName', this.DatosUsuario[0].positionName.toString());

    //   }).catch(reponse => {
    //     this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    //   });
    // }
  }




  // findUserId(): Promise<any> {
    findUserId(){
    // return new Promise((resolve, reject) => {
    //   var usuario = sessionStorage.getItem("userName");
  
    //   if (usuario === null || usuario === undefined || usuario === '') {
    //     this.logout();
    //     swal({
    //       type: 'warning',
    //       title: 'Su sesión ha caducado',
    //       buttonsStyling: false,
    //       confirmButtonClass: 'btn btn-warning',
    //       confirmButtonText: 'Aceptar',
    //     });
    //     reject('Sesión caducada');
    //   } else {
    //     this.http.post(this.obtenerRutaCompleta('validateGerente.do'), { username: usuario })
    //       .toPromise()
    //       .then(resp => {
    //         console.log('lista ::: ', resp);
    //         this.ListUsuario = resp;
    //         this.DatosUsuario = this.ListUsuario.list;
    //         console.log('DatosUsuario :::::: ', this.DatosUsuario);
    //         console.log('idProfile :::::: ', this.DatosUsuario[0].idProfile);
  
    //         console.log('IdArea :::::: ', this.DatosUsuario[0].idArea);
    //         localStorage.setItem('IdProfile', this.DatosUsuario[0].idProfile);
    //         localStorage.setItem('IdArea', this.DatosUsuario[0].idArea);
  
    //         resolve(this.DatosUsuario);
    //       })
    //       .catch(reponse => {
    //         this.mensaje.showSwal('error-message', MensajesFijosEnum.ERROR_SERVIDOR);
    //         reject('Error en el servidor');
    //       });
    //   }
    // });
  }
  




  

}