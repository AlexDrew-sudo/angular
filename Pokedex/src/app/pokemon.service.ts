import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './Models/pokeModel';



const baseURl = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    console.log("trying")
    return this.http.get(`${baseURl}/api/pokemon`)
  }
  createUser(body:object):Observable<any> {
    return this.http.post(`${baseURl}/api/user/create`, body)
  }

}
