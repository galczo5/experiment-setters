import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-setter-counter',
  template: '<p>{{ displayValue }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetterCounterComponent {

  @Input()
  set value(newValue: number) {
    this.displayValue = newValue
  }

  displayValue: number = 0; 

}
