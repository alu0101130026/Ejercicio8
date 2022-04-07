export abstract class PokemonCreator {
  /**
   * Clase abstracta que utiliza el método fábrica de la clase Pokémon.
   */
  public abstract factoryMethod(): Pokemon;
}

export class GroundCreator extends PokemonCreator {
/**
 * Clase que define el factoryMethod para los Pokémon de tipo tierra.
 */

 
    constructor(private name: string, private weight: number, private height: number, private PokType: string, BasicData: [number, number, number, number]) {
      super();
    }

    public factoryMethod(): Pokemon {
      return new Ground(this.name, this.weight,this.height,this.PokType)
    }
}
    

  export class Ground implements Pokemon {
/**
 * Clase que implementa la interfaz Pokémon y aplica el factoryMethod.
 * @param name nombre del Pokémon
 * @param weight peso del Pokémon
 * @param height altura del Pokémon
 * @param PokType tipo del Pokémon
 */
    constructor(private name: string, private weight: number, private height: number, private PokType: string) {
      
    }
  
    public get_Name() {
      return this.name;
    }
    public get_Weight() {
      return this.weight;
    }
    public get_Height() {
      return this.height;
    }
    public get_pokemon_Type() {
      return this.PokType = 'ground';
    }
  }

  export interface Pokemon{
    get_Name(): string,
    get_Weight(): number,
    get_Height(): number,
    get_pokemon_Type(): string,
  }