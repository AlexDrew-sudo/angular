import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { AccountPageComponent } from './account-page/account-page.component';
import { CatchPokemonComponent } from './catch-pokemon/catch-pokemon.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
{path:"login", component: LoginPageComponent},
{path:"catch", component: CatchPokemonComponent},
{path:"account", component: AccountPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
