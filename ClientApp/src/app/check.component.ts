import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-check',
  template: `Check {{value}}`
})

export class CheckComponent implements OnInit {
  value: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let token = localStorage.getItem('jwt');
    if (token) {
      this.http.get<{ response: string }>('/api/check', {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        })
      }).subscribe(
        response => {
          console.log(response);
          this.value = response;
        },
        error => {
          console.log(error);
          this.value = { reponse: 'error' };
        }
      );
    }
  }
}
