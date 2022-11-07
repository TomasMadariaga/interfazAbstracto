/*interface Auto {
    acelerar() : void;
    getVelociodadActual(): number;
}
​
class AutoCarrera implements Auto {
   private velocidadActual : number;
​
   constructor(){
       this.velocidadActual= 0;
   }
​
  public acelerar(): void {
       this.velocidadActual += 50;
   }
 
 public getVelociodadActual(): number {
       return this.velocidadActual;
   }
​
}
​
class AutoFamiliar implements Auto {
   private velocidadActual : number;
​
   public constructor(){
       this.velocidadActual=0;
   }
​
   public acelerar(): void {
       this.velocidadActual += 10;
   }
​
   public getVelociodadActual(): number {
       return this.velocidadActual;
   }
}
​
let nuevoAuto : AutoCarrera = new AutoCarrera();
nuevoAuto.acelerar();
// console.log(nuevoAuto.getVelociodadActual());
​
//CLASES ABSTRACTAS 
​
abstract class AutoCiudad {
   protected velocidadActual : number;
   private estaPrendido: boolean;
​
   public constructor() {
       this.velocidadActual = 0;
       this.estaPrendido = false;
   }
​
   abstract acelerar() : void ;
​
   public prender () : void {
       this.estaPrendido = true;
   }
​
   public apagar() : void {
       this.estaPrendido = false;
   }
}
​
class AutoChicoCiudad extends AutoCiudad {
   public acelerar(): void {
       this.velocidadActual += 10;
   }
}
​
let nuevoAutoCiudad : AutoChicoCiudad = new AutoChicoCiudad();
console.log(nuevoAutoCiudad);
nuevoAutoCiudad.prender();
nuevoAutoCiudad.acelerar();
console.log(nuevoAutoCiudad);
*/

abstract class Auto {
  protected marca: string;
  protected modelo: string;
  protected ruedas: number;
  protected encendido: boolean;

  constructor(marca: string, modelo: string, ruedas:number){
    this.ruedas = ruedas;
    this.marca = marca;
    this.modelo = modelo;
  }

  abstract encenderVehiculo(): void;

  abstract tocarBocina(): void;

  abstract acelerar(): void;

}

class AutoCiudad extends Auto {
  marca: string;
  modelo: string;
  ruedas: number;
  encendido: boolean;

  constructor(marca: string, modelo: string, ruedas:number) {
    super(marca, modelo, ruedas)
  }

  encenderVehiculo(): void {
    this.encendido = true;
  }

  tocarBocina(): void {
    console.log('Pip pip');
  }

  acelerar(): void {
    console.log('Acelera a 50km')
  }
}

class AutoDeportivo extends Auto {
  marca: string;
  modelo: string;
  ruedas: number;
  encendido: boolean;

  constructor(marca: string, modelo: string, ruedas:number) {
    super(marca, modelo, ruedas)
  }

  encenderVehiculo(): void {
    this.encendido = true;
  }

  tocarBocina(): void {
    console.log('Fium fium');
  }

  acelerar(): void {
    console.log('Acelera 100km')
  }
}

class Camion extends Auto {
  marca: string;
  modelo: string;
  ruedas: number;
  encendido: boolean;

  constructor(marca: string, modelo: string, ruedas:number) {
    super(marca, modelo, ruedas)
  }

  encenderVehiculo(): void {
    this.encendido = true;
  }

  tocarBocina(): void {
    console.log('Frum frum');
  }

  acelerar(): void {
    console.log('Acelera 20km');
  }
}

let camion: Camion = new Camion('Mercedez', 'Tesla', 6)
console.log(camion)
camion.tocarBocina();
camion.acelerar();