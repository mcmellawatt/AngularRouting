import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ContactsComponent } from './contacts.component';
import appRoutes from "./app.routes";

@NgModule({
  imports: [ BrowserModule, appRoutes ],
  declarations: [ AppComponent, HomeComponent, ContactsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
