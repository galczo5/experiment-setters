import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  template: `
    <button (click)="click()">on changes test</button>
    <p>Time: {{time}}</p>
    <app-on-changes-counter [value]="value"></app-on-changes-counter>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnChangesComponent {

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
