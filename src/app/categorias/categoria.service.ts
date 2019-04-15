import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class CategoriaFiltro{
  nome: string;
  pagina= 0;
  itemsporpagina= 2;

}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  categoriasUrl='http://localhost:8080/categorias';

  pesquisar(filtro: CategoriaFiltro): Promise<any>{
    let params = new HttpParams({
    fromObject: {
      page: filtro.pagina.toString(),
      size: filtro.itemsporpagina.toString()
    }
    });
   
    if(filtro.nome){
      params =params.append('nome', filtro.nome);
    }
   return this.http.get<any>(`${this.categoriasUrl}`, {params})
     .toPromise()
     .then(response => {
       const categorias = response.content;

       const resultado ={
         categorias,
         total: response.totalElements
       }
       return resultado;
     });
  }
}
