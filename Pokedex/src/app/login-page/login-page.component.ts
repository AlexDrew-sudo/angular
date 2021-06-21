import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 username
 password
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
  }
showPasswordLog(){
  
}

login(){

}
create(){
let body = {
  user: this.username,
  password: this.password
}
if (body.password.length<6){
  //password is not long enough display message 
} else if (!(/^[a-zA-Z0-9_.]*$/.test(this.username))) {
  //username contains invalid characters 
  return
}else{

}
this.pokemonservice.createUser(body).subscribe((res)=>{
  console.log("it worked")
},(err)=>{
  console.log("no work")
})

}


}