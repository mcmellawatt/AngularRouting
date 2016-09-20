import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component'
import appRoutes from "./app.routes";

@NgModule({
  imports: [ BrowserModule, appRoutes ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
