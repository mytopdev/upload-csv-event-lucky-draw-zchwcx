import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountUpModule } from 'countup.js-angular2';
import {
  MatStepperModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatBottomSheetModule,
  MatSelectModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload.component';
import { AnimationComponent } from './animation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, 
    MatStepperModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule, // this is for live draw
    MatBottomSheetModule, // this is for live draw
    MatListModule, // this is for live draw
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  CountUpModule ],
  declarations: [ AppComponent, UploadComponent, AnimationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
