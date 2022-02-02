import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { SetterComponent } from './setter/setter.component';

const routes: Routes = [
  { path: 'setter', component: SetterComponent },
  { path: 'onchanges', component: OnChangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
