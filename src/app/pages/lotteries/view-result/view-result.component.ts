import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { LotteriesResultService } from '../../../services/lotteries-result.service';
import { ShowToastrService } from '../../../services/show-toastr.service';
import { LoteriaData, Premiacao } from '../../../models/ResultLotteriesModel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.scss'
})
export class ViewResultComponent implements OnInit{
  lotteries:string[] = [];
  resultLotterie: LoteriaData | undefined;
  hiddenResult:boolean = true;
  hiddenshamrocks:boolean = true;
  hiddenTeam:boolean = true;
  hiddenMonth:boolean = true;
  awards:Premiacao[] = [];
  formResultLotterie:FormGroup;

  constructor(private stateService:StateService,
              private lotteriesResulService:LotteriesResultService,
              private showToastrService:ShowToastrService,
              private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllLotteries();
  }

  buildForm(){
    this.formResultLotterie = this.formBuilder.group({
      loteria: [null],
      concurso: [null],
      data: [null],
      local: [null],
      acumulou: [null],
      proximoConcurso: [null],
      dataProximoConcurso: [null],
      valorArrecadado: [null],
      valorAcumuladoProximoConcurso: [null],
      valorEstimadoProximoConcurso: [null],
      timeDoCoracao: [null],
      mesDaSorte: [null]
    });
  }

  getAllLotteries(){
    this.stateService.setIsLoading(true);
    this.lotteriesResulService.getAllTypesLotteries().subscribe({
      next: (data) => {
        this.lotteries = data;
        this.stateService.setIsLoading(false);
      },
      error: (e) => {
        this.showToastrService.showError('Houve um erro ao buscar as loterias');
        this.stateService.setIsLoading(false);
      }
    })
  }

  getLatestResult(lotterie:string){
    this.stateService.setIsLoading(true);
    this.lotteriesResulService.getLatestResultForTypeLotterie(lotterie).subscribe({
      next: (data) => {
        this.resultLotterie = data;
        if(this.resultLotterie.trevos.length > 0){
          this.hiddenshamrocks = false;
        }
        else{
          this.hiddenshamrocks = true;
        }

        if(this.resultLotterie.timeCoracao != null){
          this.hiddenTeam = false;
        }
        else{
          this.hiddenTeam = true;
        }
       
        if(this.resultLotterie.mesSorte != null){
          this.hiddenMonth = false;
        }
        else{
          this.hiddenMonth = true;
        }

        if(this.resultLotterie.premiacoes.length > 0){
          this.awards = this.resultLotterie.premiacoes;
        }
        this.formResultLotterie.get('loteria').setValue(this.transformNameLotterie(this.resultLotterie.loteria));
        this.formResultLotterie.get('concurso').setValue(this.resultLotterie.concurso);
        this.formResultLotterie.get('data').setValue(this.resultLotterie.data);
        this.formResultLotterie.get('local').setValue(this.resultLotterie.local);
        this.formResultLotterie.get('acumulou').setValue(this.resultLotterie.acumulou);
        this.formResultLotterie.get('proximoConcurso').setValue(this.resultLotterie.proximoConcurso);
        this.formResultLotterie.get('dataProximoConcurso').setValue(this.resultLotterie.dataProximoConcurso);
        this.formResultLotterie.get('valorArrecadado').setValue(this.transformCurrency(this.resultLotterie.valorArrecadado));
        this.formResultLotterie.get('valorAcumuladoProximoConcurso').setValue(this.transformCurrency(this.resultLotterie.valorAcumuladoProximoConcurso));
        this.formResultLotterie.get('valorEstimadoProximoConcurso').setValue(this.transformCurrency(this.resultLotterie.valorEstimadoProximoConcurso));
        this.formResultLotterie.get('timeDoCoracao').setValue(this.resultLotterie.timeCoracao);
        this.formResultLotterie.get('mesDaSorte').setValue(this.resultLotterie.mesSorte);
        this.hiddenResult = false;
        this.stateService.setIsLoading(false);
      },
      error: (e) => {
        this.showToastrService.showError('Houve um erro ao buscar o resultado');
        this.stateService.setIsLoading(false);
      }
    })
  }

  transformCurrency(numero: number): string {
    let numeroFormatado = numero.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    numeroFormatado = `R$ ${numeroFormatado}`;

    return numeroFormatado;
  }

  formatNumber(number:number) {
    if (isNaN(number) || number === null) {
        return number;
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

transformNameLotterie(nameLotterie:string): string {
  let name = "";
  if (nameLotterie === "maismilionaria") {
    name = "Mais Milionária";
} else if (nameLotterie === "megasena") {
    name = "Mega Sena";
} else if (nameLotterie === "lotofacil") {
    name = "Lotofácil";
} else if (nameLotterie === "quina") {
    name = "Quina";
} else if (nameLotterie === "lotomania") {
    name = "Loto Mania";
} else if (nameLotterie === "timemania") {
    name = "Time Mania";
} else if (nameLotterie === "duplasena") {
    name = "Dupla Sena";
} else if (nameLotterie === "federal") {
    name = "Federal";
} else if (nameLotterie === "diadesorte") {
    name = "Dia de Sorte";
} else if (nameLotterie === "supersete") {
    name = "Super Sete";
} else {
    name = "Loteria não encontrada";
}
  return name;
}

}
