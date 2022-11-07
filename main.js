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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, ruedas) {
        this.ruedas = ruedas;
        this.marca = marca;
        this.modelo = modelo;
    }
    return Auto;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, modelo, ruedas) {
        return _super.call(this, marca, modelo, ruedas) || this;
    }
    AutoCiudad.prototype.encenderVehiculo = function () {
        this.encendido = true;
    };
    AutoCiudad.prototype.tocarBocina = function () {
        console.log('Pip pip');
    };
    AutoCiudad.prototype.acelerar = function () {
        console.log('Acelera a 50km');
    };
    return AutoCiudad;
}(Auto));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, ruedas) {
        return _super.call(this, marca, modelo, ruedas) || this;
    }
    AutoDeportivo.prototype.encenderVehiculo = function () {
        this.encendido = true;
    };
    AutoDeportivo.prototype.tocarBocina = function () {
        console.log('Fium fium');
    };
    AutoDeportivo.prototype.acelerar = function () {
        console.log('Acelera 100km');
    };
    return AutoDeportivo;
}(Auto));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, ruedas) {
        return _super.call(this, marca, modelo, ruedas) || this;
    }
    Camion.prototype.encenderVehiculo = function () {
        this.encendido = true;
    };
    Camion.prototype.tocarBocina = function () {
        console.log('Frum frum');
    };
    Camion.prototype.acelerar = function () {
        console.log('Acelera 20km');
    };
    return Camion;
}(Auto));
var axelSan = new Camion('Mercedez', 'El tumba gordas', 6);
console.log(axelSan);
axelSan.tocarBocina();
axelSan.acelerar();
