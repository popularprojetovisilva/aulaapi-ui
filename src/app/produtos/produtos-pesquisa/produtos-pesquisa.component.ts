import { Component, OnInit } from '@angular/core';
import { ProdutoFiltro, ProdutoService } from '../produto.service';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit{ 
totalRegistros= 0;
  filtro = new ProdutoFiltro();
  produtos=[
     
  ];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }
  pesquisar(pagina=0){
    this.filtro.pagina = pagina;
    this.produtoService.pesquisar(this.filtro)
    .then(resultado =>{
      this.totalRegistros = resultado.total;
      this.produtos = resultado.produtos;
    });
  }
  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first/event.rows;
    this.pesquisar(pagina);
  }
}
