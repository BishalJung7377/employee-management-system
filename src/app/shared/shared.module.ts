import { InterceptorService } from './../core/services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { BarChartComponent } from './graphs/bar-chart/bar-chart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AuthGuard } from '../core/guards/auth.guard';
import {ToastrModule} from "ngx-toastr";
@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
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
    MatSnackBarModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    MatTooltipModule,
    MatProgressBarModule,
    ToastrModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule { }
