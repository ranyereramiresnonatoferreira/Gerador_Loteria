import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LotteriePipe} from '../name-lotterie.pipe'


@NgModule({
  declarations: [
    LotteriePipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    LotteriePipe
  ]
})
export class PipeModule { }
