import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasModule } from './categorias/categorias.module';
import { CoreModule } from './core/core.module';
import { CategoriaService } from './categorias/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutoService } from './produtos/produto.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CategoriasModule,
    ProdutosModule
   


  ],
  providers: [CategoriaService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
