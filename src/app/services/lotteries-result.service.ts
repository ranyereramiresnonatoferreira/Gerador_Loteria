import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

const apiUrl = 'https://loteriascaixa-api.herokuapp.com/api'

@Injectable({
  providedIn: 'root'
})
export class LotteriesResultService {

  constructor(private http: HttpClient) { }

  getLatestResultForTypeLotterie(type:string){
    return this.http.get<LoteriaData>(`${apiUrl}/Api/${type}/latest`)
    .pipe(
      retry(0)
    );
  }

  getEspecifiedResultForTypeLotterie(type:string, contest:number){
    return this.http.get<LoteriaData>(`${apiUrl}/Api/${type}/${contest}`)
    .pipe(
      retry(0)
    );
  }

  getAllTypesLotteries(){
    return this.http.get<string[]>(`${apiUrl}`)
    .pipe(
      retry(0)
    );
  }
}
