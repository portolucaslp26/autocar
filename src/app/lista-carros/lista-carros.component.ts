import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PRODUTOS } from 'src/assets/json/produtos';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  carros = PRODUTOS;
  length = this.carros.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  carrosPaginados: any = [];
  codigo: any;
  anoDe: any
  anoAte: any
  marca: any
  portas: any
  status: any
  modelo: any
  tipo: any
  modelos: any[] = [];
  constructor(private paginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.atualizaCarrosPaginados();
    this.carros.forEach((carro: any) => {
      this.modelos.push(carro.modelo)
    })
    console.log(this.modelos)
  }
  filtrarCarros(codigoRef: number, tipo: string, marca: string, modelo: string, status: string, portas: number, anoDe: number, anoAte: number, carros: any[]) {
    console.log(modelo)
    console.log(carros)

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

  handlePageEvent(e: PageEvent) {
    console.log(e)
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.atualizaCarrosPaginados();
  }

  atualizaCarrosPaginados() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.carrosPaginados = this.carros.slice(startIndex, endIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
