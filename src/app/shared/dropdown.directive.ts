import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAddDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggle(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
