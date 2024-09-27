import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { LotteriesResultService } from '../../../services/lotteries-result.service';
import { ShowToastrService } from '../../../services/show-toastr.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LotteriesDetail, clubes, mesesDoAno } from '../../../models/LotteriesDetailConst';
import { GenerateNumbersResult } from '../../../models/GenerateNumbersResult';

@Component({
  selector: 'app-generate-numbers',
  templateUrl: './generate-numbers.component.html',
  styleUrl: './generate-numbers.component.scss'
})
export class GenerateNumbersComponent implements OnInit{

  lotteries:string[] = [];
  formLotterie:FormGroup;
  hiddenQuantityShamrocks:boolean = true;
  hiddenQuantityNumbers:boolean = true;
  numbers:number[];
  lotterieTitle:string;
  resultList:GenerateNumbersResult[];
  hiddenResult:boolean = true;
  resultVisibleNumbers:boolean = true;
  resultVisibleNumbersSuperSete:boolean = true;
  resultVisibleShamrocks:boolean = true;
  resultVisibleMonth:boolean = true;
  resultVisibleTeam:boolean = true;

  constructor(
    private stateService:StateService,
    private lotteriesResulService:LotteriesResultService,
    private showToastrService:ShowToastrService,
    private formBuilder:FormBuilder){

      this.formLotterie = this.formBuilder.group({
        lotterie:[null],
        quantityGames:[0],
        quantityShamrocks:[0],
        quantityNumbers:[0]
      });
  }

  ngOnInit(): void {
    this.getAllLotteries();
  }  

  changeLotterie(){
    this.stateService.setIsLoading(true);
    this.formLotterie.get('quantityGames').setValue(0);
    this.formLotterie.get('quantityShamrocks').setValue(0);
    this.formLotterie.get('quantityNumbers').setValue(0);
    let lotterie = this.formLotterie.get('lotterie').value;
    let lotterieDetail = LotteriesDetail.find(x => x.nome == lotterie);
    this.hiddenQuantityShamrocks = !lotterieDetail.geraTrevo;
    this.changeQuantityNumbersByLotterie(lotterieDetail.minimoNumeros, lotterieDetail.maximoNumeros);
    this.hiddenQuantityNumbers = false;
    this.stateService.setIsLoading(false);
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

  generateResults(){
    this.stateService.setIsLoading(true);
    var quantityGames = Number(this.formLotterie.get("quantityGames").value)
    var quantityShamrocksCompare = this.formLotterie.get('quantityShamrocks').value;
    var quantityNumbers = Number(this.formLotterie.get("quantityNumbers").value)
    let lotterie = this.formLotterie.get('lotterie').value;
    let lotterieDetail = LotteriesDetail.find(x => x.nome == lotterie);
    if((quantityGames > 0 && quantityShamrocksCompare > 0 && quantityNumbers > 0) || ((quantityGames > 0) && (quantityShamrocksCompare == 0 && lotterieDetail.nome != 'maismilionaria') && (quantityNumbers > 0))){
    this.resultList = [];
    this.lotterieTitle = lotterieDetail.nome;

    if(lotterieDetail.nome == "supersete"){
      this.resultVisibleNumbers = true;
      this.resultVisibleNumbersSuperSete = false;
    }else{
      this.resultVisibleNumbers = false;
      this.resultVisibleNumbersSuperSete = true;
    }

    if(lotterieDetail.nome == "maismilionaria"){
      this.resultVisibleShamrocks = false;
    }else{
      this.resultVisibleShamrocks = true;
    }

    if(lotterieDetail.nome == "timemania"){
      this.resultVisibleTeam = false;
    }else{
      this.resultVisibleTeam = true;
    }

    if(lotterieDetail.nome == "diadesorte"){
      this.resultVisibleMonth = false;
    }else{
      this.resultVisibleMonth = true;
    }

    for(let i = 0; i < quantityGames; i++){
    let result = {
    month : this.generateMonth(),
    team : this.generateTeam(),
    numbersSuperSete : this.generateNumbersSuperSete(),
    shamrocks : this.generateShamrocks(Number(this.formLotterie.get("quantityShamrocks").value)),
    numbers : this.generateNumbers(quantityNumbers, lotterieDetail.menorNumero, lotterieDetail.maiorNumero),
    }

    this.resultList.push(result);
    }
    this.hiddenResult = false;
    this.stateService.setIsLoading(false);
  }
  else{
    this.showToastrService.showWarning("Existem campos não selecionados");
    this.stateService.setIsLoading(false);
  }
  }

  changeQuantityNumbersByLotterie(min:number, max:number){
    var numbers = [];
    for (var i = min; i <= max; i++) {
      numbers.push(i);
    }
    this.numbers = numbers;
  }

  generateMonth() : string{
    var indiceAleatorio = Math.floor(Math.random() * mesesDoAno.length);
    return mesesDoAno[indiceAleatorio]; 
  }

  generateTeam() : string{
    var indiceAleatorio = Math.floor(Math.random() * clubes.length);
    return clubes[indiceAleatorio]; 
  }

  generateNumbersSuperSete() : number[]{
    let numbers = new Array();
    for (let i = 0; i < 7; i++) {
      let number = Math.floor(Math.random() * 10);
      numbers.push(number);
    }
    return numbers;
  }

  generateNumbers(quantity:number, min:number, max:number) : number[] {
    var numbers = [];
    while (numbers.length < quantity) {
        var numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(numero)) {
          numbers.push(numero);
        }
    }
    numbers.sort((a, b) => a - b);

    return numbers;
}

generateShamrocks(quantity:number) : number[]{
  let numeros = [];
  while (numeros.length < quantity) {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio);
    }
  }
  numeros.sort((a, b) => a - b);
  return numeros;
}


transformTitle(nameLotterie:string) {

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
