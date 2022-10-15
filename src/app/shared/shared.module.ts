import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { BarChartComponent } from './graphs/bar-chart/bar-chart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  declarations: [
    PieChartComponent,
    BarChartComponent,
  ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    PieChartComponent,
    BarChartComponent,
    MatSnackBarModule
  ],
  providers: [

  ]
})
export class SharedModule { }
