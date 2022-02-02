import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-counter',
  template: '<p>{{ displayValue }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnChangesCounterComponent implements OnChanges {

  @Input()
  value: number = 0;

  displayValue: number = 0; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.displayValue = this.value;
    }
  }
}
