import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { LotteriesResultService } from '../../../services/lotteries-result.service';
import { ShowToastrService } from '../../../services/show-toastr.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.scss'
})
export class ViewResultComponent implements OnInit{
  lotteries:string[] = [];

  constructor(private stateService:StateService,
              private lotteriesResulService:LotteriesResultService,
              private showToastrService:ShowToastrService){
  }

  ngOnInit(): void {
    this.getAllLotteries();
  }

  getAllLotteries(){
    this.stateService.setIsLoading(true);
    this.lotteriesResulService.getAllTypesLotteries().subscribe({
      next: (data) => {
        this.lotteries = data;
      },
      error: (e) => {
        this.showToastrService.showError('Houve um erro ao buscar as loterias');
      }
    })
  }

}
