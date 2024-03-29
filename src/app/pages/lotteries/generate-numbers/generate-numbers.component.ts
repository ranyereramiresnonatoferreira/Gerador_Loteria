import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { LotteriesResultService } from '../../../services/lotteries-result.service';
import { ShowToastrService } from '../../../services/show-toastr.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generate-numbers',
  templateUrl: './generate-numbers.component.html',
  styleUrl: './generate-numbers.component.scss'
})
export class GenerateNumbersComponent implements OnInit{

  lotteries:string[] = [];

  constructor(
    private stateService:StateService,
    private lotteriesResulService:LotteriesResultService,
    private showToastrService:ShowToastrService,
    private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.getAllLotteries();
  }  


  getAllLotteries(){
    this.stateService.setIsLoading(true);
    this.lotteriesResulService.getAllTypesLotteries().subscribe({
      next: (data) => {
        var removeFederal = data.filter(x => x != 'federal')
        this.lotteries = removeFederal;
        this.stateService.setIsLoading(false);
      },
      error: (e) => {
        this.showToastrService.showError('Houve um erro ao buscar as loterias');
        this.stateService.setIsLoading(false);
      }
    })
  }

}
