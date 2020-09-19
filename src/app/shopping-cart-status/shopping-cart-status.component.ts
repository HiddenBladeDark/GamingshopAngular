import { 
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges, 
  SimpleChange,
  OnDestroy,
  DoCheck,
  SimpleChanges} from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.css']
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  // recibimos datos
  @Input() precio: Number;
  // recibimos nuestra interfaz 
  @Input() modeloDeTienda: Array<Producto>
  // enviar datos
  @Output() pagar: EventEmitter<null> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
    // cuando se inicialice llame el evento
    this.activarEventoTeclado()
  }
  // destuir un componente
  ngOnDestroy(): void {
    // destruir el evento keypress del onteclado 
    document.removeEventListener("keypress", this.onTeclado)
  }


  // se activa cada ves que se realiza un cambio del DOM
  ngDoCheck(): void {
    console.log('cambioiwe')
  }

  // solo funciona en componentes hijos para poder cambiar
  // recibira array objeto tipo simplechanges
  ngOnChanges(cambios:SimpleChanges): void {
    console.log(cambios);
  }

  realizarPago(){
    // enviar datos
    this.pagar.emit();
  }

  onTeclado(_evento){
    // capturar solamente el enter
    if(_evento.code === "Enter"){
      console.log(_evento)
      this.realizarPago()
    }
  }
  // evento global relacionado con el document con el evento keypress
  activarEventoTeclado(){
    
    document.addEventListener("keypress", evento => {
      this.onTeclado(evento);
    });
  }


}
