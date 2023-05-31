import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  domain="https://mocki.io/v1/f027a400-e5d1-48e4-84d5-6ef328ce70e6"

  constructor(private http:HttpClient) {
  }

  getMockUser():Observable<any>{
    return this.http.get(this.domain)
  }
}
