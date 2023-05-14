import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PRODUTOS } from 'src/assets/json/produtos';
import { CatalogoService } from './catalogo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  carros = PRODUTOS;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  codigo: any;
  anoDe: any
  anoAte: any
  marca: any
  portas: any
  status: any
  modelo: any
  tipo: any
  modelos: any[] = [];
  constructor(
    public catalog: CatalogoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const codigoRef = params['codigoRef'];
      const tipo = params['tipo'];
      const marca = params['marca'];
      const modelo = params['modelo'];
      const status = params['status'];
      const portas = params['portas'];
      const anoDe = params['anoDe'];
      const anoAte = params['anoAte'];
      console.log(params)
      this.catalog.filtrarCarros(codigoRef, tipo, marca, modelo, status, portas, anoDe, anoAte, this.carros);

    })
    this.catalog.length = this.carros.length;
    // this.atualizaCarrosPaginados();
    this.carros.forEach((carro: any) => {
      this.modelos.push(carro.modelo)
    })
  }

  handlePageEvent(e: PageEvent) {
    console.log(e)
    this.pageEvent = e;
    this.catalog.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.atualizaCarrosPaginados();
  }

  atualizaCarrosPaginados() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.catalog.carrosPaginados = this.carros.slice(startIndex, endIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
