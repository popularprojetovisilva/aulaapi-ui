import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias=[
    {id:'1', nome:'informática'},
    {id:'2', nome:'escritório'},
    {id:'3', nome:'farmacia'},
    {id:'4', nome:'veterinario'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
