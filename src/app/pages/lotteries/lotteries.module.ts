import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteriesRoutingModule } from './lotteries-routing.module';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class LotteriesModule { }
