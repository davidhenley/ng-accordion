import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'accordion-header',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionHeaderComponent {
  private _isOpen = false;
  
  @Input()
  @HostBinding('class.accordion-open')
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  click$ = fromEvent(this.host.nativeElement, 'click');

  get isOpen() {
    return this._isOpen;
  }

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) { }
}