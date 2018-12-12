import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProvaService } from "@prova/services/prova.service";

@Component({
  selector: "app-figlio",
  templateUrl: "./figlio.component.html",
  styleUrls: ["./figlio.component.scss"]
})
export class FiglioComponent implements OnInit {
  @Input() nome: string;

  @Output() titolo = new EventEmitter<string>();

  constructor(private provaFiglioSrv:ProvaService){

  }

  cognome = 'rossi';


  ngOnInit() {}

  setTitoloPadre(){
    this.titolo.emit('papa');
  }

}
