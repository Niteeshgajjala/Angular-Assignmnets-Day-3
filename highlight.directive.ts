import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
