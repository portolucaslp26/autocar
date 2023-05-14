import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
public carrosPaginados: any[] = [];
public modelos: any[] = [];
public length!: number

constructor() { }
filtrarCarros(codigoRef: number, tipo: string, marca: string, modelo: string, status: string, portas: number, anoDe: number, anoAte: number, carros: any[]) {
  this.carrosPaginados =  carros.filter((carro) =>
    (codigoRef ? carro.codigoRef == codigoRef : true) &&
    (tipo ? carro.tipo == tipo : true) &&
    (marca ? carro.marca == marca : true) &&
    (modelo ? carro.modelo == modelo : true) &&
    (status ? carro.disponivel : true) &&
    (portas ? carro.portas == portas : true) &&
    (anoDe ? carro.ano >= anoDe : true) &&
    (anoAte ? carro.ano <= anoAte : true)
  );
  this.carrosPaginados.forEach((carro: any) => {
    this.modelos.push(carro.modelo)
  })
  this.length = this.carrosPaginados.length;
}
}
