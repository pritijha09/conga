import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer){
    this.ChangeBgColor('red');
  }

  ChangeBgColor(color: string){
    this.renderer.setElementStyle(this.ele.nativeElement, 'color', color);
  }
}