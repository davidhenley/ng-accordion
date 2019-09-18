import { Component,  ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'accordion-content',
  template: '<ng-content *ngIf="isOpen"></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent {
  private _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) { }
}