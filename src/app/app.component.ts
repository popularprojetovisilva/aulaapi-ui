import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto de aula';

  categorias=[
    {id:'1', nome:'informática'},
    {id:'2', nome:'escritório'},
    {id:'3', nome:'farmacia'},
    {id:'4', nome:'veterinario'},
  ]
}
