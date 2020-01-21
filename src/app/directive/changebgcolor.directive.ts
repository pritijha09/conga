import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer){
    //this.ChangeBgColor('red');
  }

@HostBinding('style.border') border: string;
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('red');
    this.border = '5px solid green';
  }

  @HostListener('click') onClick() {
    window.alert('Element clicked!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('green');
     this.border = '5px solid blue';
  }

  changeBackgroundColor(color: string){
    this.renderer.setElementStyle(this.ele.nativeElement, 'color', color);
  }
}