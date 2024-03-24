import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteriesRoutingModule } from './lotteries-routing.module';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';
import { ViewResultComponent } from './view-result/view-result.component';


@NgModule({
  declarations: [
    GenerateNumbersComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    LotteriesRoutingModule
  ]
})
export class LotteriesModule { }
