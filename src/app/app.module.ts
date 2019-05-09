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

const routes: Routes =[
  {path:'categorias', component:CategoriasPesquisaComponent},
  {path:'produtos', component: ProdutosPesquisaComponent},
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
