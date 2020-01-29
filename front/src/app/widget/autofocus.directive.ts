import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private elt: ElementRef) {
    console.log('Testouille');
  }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }
}
