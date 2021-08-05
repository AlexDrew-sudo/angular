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
  login(body:object):Observable<any> {
    return this.http.post(`${baseURl}/api/user/login`,body)
  }
  getById(id:number): Observable<any>{
    return this.http.get(`${baseURl}/api/pokemon/${id}`)
  }
  getBerriesById(id:number): Observable<any>{
    return this.http.get(`${baseURl}/api/inventory/berries/${id}`)
  }
  updateBerriesById(body):Observable<any>{
    return this.http.put(`${baseURl}/api/berries/user`, body)
  }
  catchPokemon(body:object): Observable<any>{
    return this.http.post(`${baseURl}/api/catch/pokemon`,body)
  }
  updateBalls(body){
    return this.http.put(`${baseURl}/api/user/pokeballcount`,body)
  }
  getUser(id){
    return this.http.get(`${baseURl}/api/user/${id}`)
  }
getCaughtbyId(id){
  return this.http.get(`${baseURl}/api/${id}/caughtpokemon`)
}
addBerries(body){
  return this.http.put(`${baseURl}/api/berries/add`, body)
}
addPokeballs(body){
  return this.http.put(`${baseURl}/api/pokeballs/add`,body)
}
firstBerries(id){
  let body={
    id: id
  }
  return this.http.post(`${baseURl}/api/berries/firs`, body)
}



}
