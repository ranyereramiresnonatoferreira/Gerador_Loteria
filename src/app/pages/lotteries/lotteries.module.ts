import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotteriesRoutingModule } from './lotteries-routing.module';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PipeModule } from '../../pipes/pipe/pipe.module';
import { ViewResultNumberComponent } from './view-result-number/view-result-number.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    GenerateNumbersComponent,
    ViewResultComponent,
    ViewResultNumberComponent
  ],
  imports: [
    CommonModule,
    LotteriesRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    PipeModule,
    AdsenseModule
  ]
})
export class LotteriesModule { }
