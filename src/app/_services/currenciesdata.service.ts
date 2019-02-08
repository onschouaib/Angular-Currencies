import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {config} from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:4200https://restcountries.eu/rest/v2/',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
      
    })
  };

  constructor(private http:HttpClient) { }
  getDate(){

    return this.http.get(config.country, this.httpOptions)
    .subscribe(data => {
      console.log("Data Her : ", data)
    })
  }
}