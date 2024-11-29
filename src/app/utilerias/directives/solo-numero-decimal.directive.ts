
import { Directive, ElementRef, HostListener } from '@angular/core';
import { SoloNumeroDecimalPipe } from '../pipes/solo-numero-decimal.pipe';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[soloNumeroDecimal]'
})

export class SoloNumeroDecimalDirective {

    maxValue: number;

    constructor(private el: ElementRef, private roundPipe: SoloNumeroDecimalPipe) { 
        this.maxValue = 99999999.99;
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        if (
            // Allow: Delete, Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13, 190, 110].indexOf(e.keyCode) !== -1 ||
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
            // Allow: Delete, Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }

        const result = this.convertToNumber(this.el.nativeElement.value);
        if (Number.isNaN(result) || result < 0) {
            this.el.nativeElement.value = this.el.nativeElement.value.substring(0, this.el.nativeElement.value.length - 1);
        } else {
            if (result > this.maxValue) {
                this.el.nativeElement.value = this.maxValue;
            }
        }
    }

    convertToNumber(valor: any): number {
        if (valor != null && valor !== undefined) {
            try {
                return Number(valor);
            } catch (e) {
                return -1;
            }
        } else {
            return -1;
        }
    }

    @HostListener('focus') onfocus() {
        if (this.el.nativeElement.value != null && this.el.nativeElement.value !== undefined && this.el.nativeElement.value !== '') {
            this.el.nativeElement.value = this.roundPipe.transform(this.el.nativeElement.value);
        }
    }

    @HostListener('blur') onBlur() {
        if (this.el.nativeElement.value != null && this.el.nativeElement.value !== undefined && this.el.nativeElement.value !== '') {
            this.el.nativeElement.value = this.roundPipe.transform(this.el.nativeElement.value);
        }
    }

    @HostListener('change') change() {
        if (this.el.nativeElement.value != null && this.el.nativeElement.value !== undefined && this.el.nativeElement.value !== '') {
            this.el.nativeElement.value = this.roundPipe.transform(this.el.nativeElement.value);
        }
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

}
