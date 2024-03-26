import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { LotteriesResultService } from '../../../services/lotteries-result.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.scss'
})
export class ViewResultComponent implements OnInit{
  lotteries:string[] = [];

  constructor(private stateService:StateService,
              private lotteriesResulService:LotteriesResultService){

  }

  ngOnInit(): void {
    
  }

  getAllLotteries(){
    this.stateService.setIsLoading(true);
    this.lotteriesResulService.getAllTypesLotteries().subscribe({
      next: (data) => {
        this.lotteries = data;
      },
      error: (e) => {
    
      }
    })
  }

}
