export class User {
     id: number;
     userName;
     favoritePokemon?;
     admin: boolean; 
     pokeballCount: number;
     constructor(obj:any){
          Object.assign(this, obj)
      }
}