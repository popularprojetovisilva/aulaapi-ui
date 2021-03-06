import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProdutosPesquisaComponent, ProdutosCadastroComponent],
  exports:[ProdutosPesquisaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule 
  ]
})
export class ProdutosModule { }
