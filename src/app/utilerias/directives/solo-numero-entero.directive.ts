
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[soloNumeroEntero]'
})

export class SoloNumeroEnteroDirective {
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
    value: any;
    constructor(private el: ElementRef) {}
/*
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
            // Allow: Delete, Backspace, Tab, Escape, Enter
            [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return;  // let it happen, don't do anything
        }
        const valor: string = this.el.nativeElement.value.replace(/\D/g, '');
        this.el.nativeElement.value = valor;
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
*/
onInputChange($event: any) { 
    this.value = $event.target.value; const regex = /[^0-9]/g; 
    if (regex.test(this.value)) { 
        this.el.nativeElement.value = this.value.substring(0, this.value.length - 1); 
        this.ngModelChange.emit(this.value.substring(0, this.value.length - 1)); 
    } }
  @HostListener('keydown', ['$event']) 
  onKeyDown(e: KeyboardEvent) { 
    this.ValidacionBotones(e); 
    const valor: string = this.el.nativeElement.value; 
    const regex = /[^0-9]/g; 
    if (regex.test(this.el.nativeElement.value)) { 
        this.el.nativeElement.value = valor.substring(0, valor.length - 1); 
    } }
  @HostListener('window:keyup', ['$event']) 
  keyEvent(e: KeyboardEvent) { 
    this.ValidacionBotones(e); 
    const valor: string = this.el.nativeElement.value; 
    const regex = /[^0-9]/g; 
    if (regex.test(this.el.nativeElement.value)) { 
        this.el.nativeElement.value = valor.substring(0, valor.length - 1); 
    } }
  @HostListener('paste', ['$event']) 
  onPaste(event: any) { 
    event.preventDefault(); 
    document.execCommand('insertText', false, ''); 
    const pastedInput: string = event.clipboardData.getData('text/plain').replace(/[^0-9]/g, ''); 
    document.execCommand('insertText', false, pastedInput); }
  ValidacionBotones(e:  any) {/* Permite: Delete, Backspace, Tab, Escape, Enter - Home, End, Left, Right */
  if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || (e.keyCode >= 35 && e.keyCode <= 39)) { return; } 
}
}
