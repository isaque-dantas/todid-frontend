import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { }

  static tokenExists(): boolean {
    return localStorage.getItem('token') !== null;
  }

  static getToken(): string {
    return 'Bearer ' + localStorage.getItem('token');
  }

  static setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
