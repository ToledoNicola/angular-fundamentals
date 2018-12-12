import { Component } from '@angular/core';
import { ProvaService } from './services/prova.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [ProvaService]
})
export class AppComponent {
  title:string = "app";

  constructor(private provaSrv:ProvaService){

  }

  getTitle() {
    return `${this.title} ciaoooo `;
  }

  setTitolo(titolo:string){
    this.title = titolo
  }
}
