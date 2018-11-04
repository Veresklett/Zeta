import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  canLoad() {
    let token = localStorage.getItem('jwt');
    if (token) {
      return true;
    }
    this.router.navigate(['/account']);
    return false;
  }
}
