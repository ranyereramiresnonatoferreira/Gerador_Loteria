import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getItem(key: string) {
    let keyEncoded = null;
    let valueDecoded = null;
    let valueEncoded = null;

    keyEncoded = btoa(key);
    valueEncoded = sessionStorage.getItem(keyEncoded);

    if (valueEncoded !== null) {
      valueDecoded = atob(valueEncoded);
      return JSON.parse(valueDecoded);
    }
    else{
      return null;
    }
  }

  public setItem(key: string, value: any) {
    return new Promise((resolve, reject) => {
      if (value) {
        let keyEncoded = null;
        let valueEncoded = null;
        keyEncoded = btoa(key);
        valueEncoded = btoa(JSON.stringify(value));

        sessionStorage.setItem(keyEncoded, valueEncoded);
        if (this.getItem(key)) {
          resolve(true);
        } else {
          reject(false);
        }
      } else {
        let keyEncoded = null;

        keyEncoded = btoa(key);

        sessionStorage.removeItem(keyEncoded);
        if (!this.getItem(key)) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    });
  }

  removeItem(key: string) {
    try {
      const keyEncoded = btoa(key);
      sessionStorage.removeItem(keyEncoded);
    } catch (error) {
      sessionStorage.removeItem(key);
    }
  }

  clean(): void {
    sessionStorage.clear();
  }
}
