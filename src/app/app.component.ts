import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { LocalStorageService } from './services/local-storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Gerador_Loteria';
  isLoading$: Observable<boolean>;

  constructor(private stateService:StateService, private localStorageService:LocalStorageService, private router:Router){
    this.isLoading$ = this.stateService.getLoading$;
  }

  ngOnInit(): void {
    this.router.navigate(['/lotteries/generate-numbers']);
  }
}
