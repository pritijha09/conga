import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer){
    //this.ChangeBgColor('red');
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('red');
  }

  @HostListener('click') onClick() {
    window.alert('Element clicked!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('green');
  }

  changeBackgroundColor(color: string){
    this.renderer.setElementStyle(this.ele.nativeElement, 'color', color);
  }
}