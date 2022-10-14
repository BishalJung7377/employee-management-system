import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [

  ]
})
export class SharedModule { }
