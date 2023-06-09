import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective {

  constructor(
    private el: ElementRef
  ) { }

  @Output() clickedOutside = new EventEmitter();

  @HostListener ('document:click', ['$event.target']) // detecta si se hizo click en el documento y se recibe el evento
    public onCLick(target: any){ // funcion que recibe el elemento target como parametro

      const outside: boolean = this.el.nativeElement.contains(target); //Variable para saber si se hizo click fuera del                                                        elemento

      if(!outside){
        this.clickedOutside.emit(true); // si target se encuentra fuera del documento, emite true
      }
    }
}
