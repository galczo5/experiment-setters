import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-setter',
  template: `
  <button (click)="click()">setter test</button>
  <p>Time: {{time}}</p>
  <app-setter-counter [value]="value"></app-setter-counter>
`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetterComponent {

value: number = 0;
time: number = 0;

constructor(private cdr: ChangeDetectorRef) {}

click(): void {
  this.value = 0;

  const start = performance.now();
  for (let i = 0; i < 100_000; i++) {
    this.value = i;
    this.cdr.detectChanges();
  }

  this.time = performance.now() - start;
  this.cdr.detectChanges();
}

}
