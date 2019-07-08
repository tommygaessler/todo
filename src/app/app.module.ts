import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatBadgeModule
} from '@angular/material';
import { CounterPipe } from './pipes/counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
