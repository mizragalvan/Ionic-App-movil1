import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[soloLetraGuion]',
})

export class SoloLetraGuionDirective {

    constructor(private el: ElementRef) {}

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
        const regex = /[^0-9a-zA-Z-_\s]/g;
        if (regex.test(this.el.nativeElement.value)) {
            this.el.nativeElement.value = valor.substring(0, valor.length - 1);
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
        const regex = /[^0-9a-zA-Z-_\s]/g;
        if (regex.test(this.el.nativeElement.value)) {
            this.el.nativeElement.value = valor.substring(0, valor.length - 1);
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

    @HostListener('blur', ['$event'])
    onblur(event: DragEvent) {
        event.preventDefault();
        // tslint:disable-next-line: max-line-length
        const valor: string = this.el.nativeElement.value.replace(/[`{}~!?¿@#$%^&*()_|+\-=?];:'"¨,.<>\{\}\[\]\\\/]/gi, '');
        this.el.nativeElement.value = valor;

        // Limpiar el acento
        const acento = this.el.nativeElement.value.replace(/\´/g, '');
        this.el.nativeElement.value = acento;

    }
}

