import { Directive ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appGit]'
})
export class GitDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement
  }

}
