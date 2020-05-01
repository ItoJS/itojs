import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginModuleComponent, ProductAlertsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
