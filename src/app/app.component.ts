import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { LocalStorageService } from './services/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gerador_Loteria';
  isLoading$: Observable<boolean>;

  constructor(private stateService:StateService, private localStorageService:LocalStorageService){
    this.isLoading$ = this.stateService.getLoading$;
  }
}
