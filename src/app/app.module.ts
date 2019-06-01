import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule],
  declarations: [AppComponent, HeroesComponent, HeroListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
