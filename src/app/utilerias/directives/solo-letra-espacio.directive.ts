
import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[soloLetraEspacio]',
})

export class SoloLetraEspacioDirective {
    @Output() ngModelChange = new EventEmitter();
    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        if (
            // Allow: Delete, Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }
        const valor: string = this.el.nativeElement.value;
        const regex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g;
        if (regex.test(this.el.nativeElement.value)) {
            e.preventDefault();
            this.el.nativeElement.value = valor.substring(0, valor.length - 1);
            this.ngModelChange.emit(this.el.nativeElement.value);
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(e: KeyboardEvent) {
        if (
            // Allow: Delete, Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }
        const valor: string = this.el.nativeElement.value;
        const regex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g;
        if (regex.test(this.el.nativeElement.value)) {
            this.el.nativeElement.value = valor.substring(0, valor.length - 1);
            this.ngModelChange.emit(this.el.nativeElement.value);
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: any) {
        event.preventDefault();
        document.execCommand('insertText', false, '');
    }

    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
        event.preventDefault();
        document.execCommand('insertText', false, '');
    }

}

