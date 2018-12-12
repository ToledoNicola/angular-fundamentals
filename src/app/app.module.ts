import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// mdb bootstrap
import { MDBBootstrapModule } from "angular-bootstrap-md";


import { AppComponent } from '@prova/app.component';
import { FiglioComponent } from '@prova/components/figlio/figlio.component';
import { ProvaService } from './services/prova.service';


@NgModule({
  declarations: [AppComponent, FiglioComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
