import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriasModule } from './categorias/categorias.module';
import { CoreModule } from './core/core.module';
import { CategoriaService } from './categorias/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoService } from './produtos/produto.service';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosPesquisaComponent } from './produtos/produtos-pesquisa/produtos-pesquisa.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';

const routes: Routes =[
  {path:'categorias', component:CategoriasPesquisaComponent},
  {path:'categorias/novo', component:CategoriasCadastroComponent},
  {path:'produtos', component: ProdutosPesquisaComponent},
  {path:'produtos/novo', component:ProdutosCadastroComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    CategoriasModule,
    ProdutosModule
   


  ],
  providers: [CategoriaService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
