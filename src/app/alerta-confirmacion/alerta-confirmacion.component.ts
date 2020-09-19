import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta-confirmacion',
  templateUrl: './alerta-confirmacion.component.html',
  styleUrls: ['./alerta-confirmacion.component.css']
})
export class AlertaConfirmacionComponent implements OnInit {
  // constructor
  public active:Boolean;

  constructor() {
    this.active = false;
   }

  ngOnInit(): void {
  }
  // ocultar ventana
  ocultar(){
    this.active = false;
  }
  // mostrar
  mostrar(){
    this.active = true;
  }
}
