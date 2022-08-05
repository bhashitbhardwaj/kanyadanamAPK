import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  Set(key: string, data: object): void {
    let strigifiedData = JSON.stringify(data);
    localStorage.setItem(key, strigifiedData);
  }

  Get(key: string): object {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  ClearAll(): void {
    localStorage.clear();
  }

  Clear(key: string): void {
    localStorage.removeItem(key);
  }
}
