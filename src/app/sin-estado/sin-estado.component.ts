import { Producto } from './../interfaces/producto';
// con eventemitter tratara de importar dentro del paquete que encuentre,
// asegurarse desde el core angular y no del paquete eventos.
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.css'],
  // como detectamos los cambios
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinEstadoComponent implements OnInit {

  // hacer click se active el valor boolean false a true
  public menuVisible: boolean;
  // recibir datos con input
  // le ponemos el nombre del elemento que se expondra
  @Input() producto:Producto;
  // enviar los datos al component padre
  private disabled:boolean;
  // emitter enviara un evento tipo producto el cual nos permite enviar informacion al padre
  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter()

  public accioncompra:string;
  constructor() { }

  ngOnInit(): void {
    // interpolamos lo que capturamos del input a la accion compra para mostrar
    // el cual nos va a desplegar los datos cuando este disponible el component
    this.accioncompra = `${this.producto.precio} Buy !`;
  }
  selecionarItem(prod){
    this.disabled = true;
    this.accioncompra = `ADDED TO CART`;
    // despachamos el evento, emitimos el producto al componente padre para que lo capture por output
    this.productoSeleccionado.emit(this.producto)
  }
  // analizar si esta true o false el boton
  isItemDisabled(){
    return !!this.disabled;
  }
  // desaparecer cuadro dialogo precio
  menuClickOcul(){
    this.menuVisible = false;
  }
  // al hacer click derecho aparece el menu
  onRightClick(){
    this.menuVisible = true;
    return false;
  }

}
