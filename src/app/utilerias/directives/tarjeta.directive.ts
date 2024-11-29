
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[formatoTarjeta]'
})

export class TarjetaDirective {

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
        // Ensure that it is a number and stop the keypress
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)
        ) {
            e.preventDefault();
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(e: KeyboardEvent) {
        if (
            // Allow: Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

    @HostListener('paste', ['$event'])
    onPaste(event: any) {
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        if (!isIE) {
            event.preventDefault();
            document.execCommand('insertText', false, '');
        }

    }

    @HostListener('drop', ['$event'])
    onDrop(event: DragEvent) {
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        if (!isIE) {
            event.preventDefault();
            document.execCommand('insertText', false, '');
        }
    }

    @HostListener('blur', ['$event'])
    onblur(event: DragEvent) {
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

}
