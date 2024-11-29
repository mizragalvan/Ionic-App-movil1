import { Injectable, Output, EventEmitter } from '@angular/core';
import { Notice } from '../model/notice.model';

@Injectable()
export class ComunicacionService {
    @Output() minimizar: EventEmitter<boolean> = new EventEmitter();
    @Output() recargar: EventEmitter<boolean> = new EventEmitter();
    @Output() notificar: EventEmitter<any> = new EventEmitter();
    @Output() actualizar: EventEmitter<Notice> = new EventEmitter();

    minimizarMenu (estatus: boolean): any {
        this.minimizar.emit(estatus);
    }

    actualizarBandejas (estatus: boolean): any {
        this.recargar.emit(estatus);
    }

    actualizarNotificaciones (notification: any): any {
        this.notificar.emit(notification);
    }

    actualizarNoticias (notice: Notice): any {
        this.actualizar.emit(notice);
    }
}
