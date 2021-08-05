
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/usermodel';
import { PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username
  password
  loginProblem: boolean
  invalidUser: boolean
  longer: boolean
  inUse:boolean
  loading:boolean
 
  constructor(private pokemonservice: PokemonService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  showPasswordLog() {
    var x = <HTMLInputElement>document.getElementById('login')
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password"
    }
  }
noText(){
  if(this.inUse==true){
    this.inUse=!this.inUse
  }
  if(this.loginProblem==true){
    this.loginProblem=!this.loginProblem
  }
}
noPasswordText(){
  if(this.longer==true){
    this.longer=!this.longer
  }
  if(this.loginProblem==true){
    this.loginProblem=!this.loginProblem
  }
}
  login() {
    this.loading=!this.loading
    let body = {
      user: this.username,
      password: this.password
    } 
    setTimeout(() => {
      this.pokemonservice.login(body).subscribe((res) => {
        if (!res) {
          this.loading=!this.loading
          this.loginProblem = true
        }
  
        else {
          this.userService.setActiveUser(res[0])
          this.router.navigate([""])
        }
  
  
  
      }, (err) => {
        this.loginProblem = true
        this.loading=!this.loading
      })
    }, 750)
   

  }
  create() {
    let body = {
      user: this.username,
      password: this.password
    }
    if (body.password.length < 6) {
      this.longer = true
      return
    } else if (!(/^[a-zA-Z0-9_.]*$/.test(this.username))) {
      this.invalidUser = true
      return
    } else {
      this.pokemonservice.createUser(body).subscribe((res) => {
        if (!res) {
          this.loginProblem = true
          console.log("no loggo")
        } else {
          this.login()
          this.pokemonservice.firstBerries(res.insertId).subscribe((res)=>{
          
          })

        }
      }, (err) => {
       this.inUse=true
      })
    }


  }


}