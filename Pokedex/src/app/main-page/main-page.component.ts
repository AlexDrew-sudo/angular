import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../Models/usermodel';
import { PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private userService: UserService,
    private pokemonService: PokemonService,
    private elementRef: ElementRef) {
    this.newUserSubscription = this.userService.newActiveUser$.subscribe((user: User) => {
      this.user = user;


    })
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#5D5179"
  }
  loading = false
  newUserSubscription: Subscription
  user: User
  pokeballCount
  berryCount
  ngOnInit(): void {
    if (this.userService.getActiveUser()) {
      this.user = this.userService.getActiveUser()
      this.pokeballCount = this.user.pokeballCount
      this.pokemonService.getBerriesById(this.user.id).subscribe((res) => {
        this.berryCount = res.quantity
        if(!this.berryCount){
          this.berryCount=5
        }
      })
    }

  }
  addBerries() {
    let body = {
      id: this.user.id,
      amount: this.berryCount + 5
    }
    this.pokemonService.addBerries(body).subscribe((res) => {
      this.pokemonService.getBerriesById(this.user.id).subscribe((res) => {
        this.berryCount = res.quantity
        console.log(this.berryCount)
      })
    })
  }
  addPokeballs() {
    let body = {
      id: this.user.id,
      amount: this.pokeballCount + 5

    }
    this.pokemonService.addPokeballs(body).subscribe((res) => {
      this.pokemonService.getUser(this.user.id).subscribe((res) => {
        this.pokeballCount = res[0].pokeballCount
      })
    })
  }
  logout() {
    this.loading = !this.loading
    setTimeout(() => {
      this.userService.logout()
      this.loading = !this.loading
      this.user=null
    }, 750)

  }

}
