import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 10px;">
      <button routerLink="/onchanges">OnChanges</button>
      <button routerLink="/setter">Setter</button>
      <div style="margin-top: 50px;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
