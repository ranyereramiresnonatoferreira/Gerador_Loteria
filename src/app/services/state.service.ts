import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  geLoading$ = this._isLoading.asObservable();

  constructor(private localStorageService:LocalStorageService) { }

  setIsLoading(value: boolean) {
    this._isLoading.next(value);
  }
}
