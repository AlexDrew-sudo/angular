import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TheDexComponent } from './the-dex/the-dex.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CatchPokemonComponent } from './catch-pokemon/catch-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TheDexComponent,
    AccountPageComponent,
    LoginPageComponent,
    CatchPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
