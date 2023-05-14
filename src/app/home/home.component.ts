import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codigo: any = '';
  anoDe: any = ''
  anoAte: any = ''
  marca: any = ''
  portas: any = ''
  status: any = ''
  modelo: any = ''
  tipo: any = ''
  modelos: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  filtrar(codigoRef: any, tipo: any, marca: any, modelo: any, status: any, portas: any, anoDe: any, anoAte: any) {
    const filtro = {
      codigoRef: codigoRef ?? null,
      tipo: tipo ?? null,
      marca: marca ?? null,
      modelo: modelo ?? null,
      status: status ?? null,
      portas: portas ?? null,
      anoDe: anoDe ?? null,
      anoAte: anoAte ?? null
    }
    console.log(filtro)
    this.router.navigate(['lista-carros'], { queryParams: filtro });

  }

}
