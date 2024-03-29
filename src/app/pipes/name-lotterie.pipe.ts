import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLotterie'
})
export class LotteriePipe implements PipeTransform {

  transform(nameLotterie:string): string {
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
