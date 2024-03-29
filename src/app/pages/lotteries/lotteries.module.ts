import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteriesRoutingModule } from './lotteries-routing.module';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PipeModule } from '../../pipes/pipe/pipe.module';


@NgModule({
  declarations: [
    GenerateNumbersComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    LotteriesRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    PipeModule
  ]
})
export class LotteriesModule { }
