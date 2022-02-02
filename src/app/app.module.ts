import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesCounterComponent } from './on-changes/on-changes-counter.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { SetterCounterComponent } from './setter/setter-counter.component';
import { SetterComponent } from './setter/setter.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    SetterComponent,
    SetterCounterComponent,
    OnChangesCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
