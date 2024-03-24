

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';
import { ViewResultComponent } from './view-result/view-result.component';

const routes: Routes = [
  {
    path: "generate-numbers",
    component: GenerateNumbersComponent,

  },
  {
    path: "view-result",
    component: ViewResultComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteriesRoutingModule { }
