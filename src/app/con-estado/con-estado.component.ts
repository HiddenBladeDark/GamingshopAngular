import { AlertaConfirmacionComponent } from './../alerta-confirmacion/alerta-confirmacion.component';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// importamos la inferfaces producto
import { Producto } from './../interfaces/producto';
// improtamos el modelo tienda
import { Tienda } from './../models/tienda.model';


@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
// implementar ciclo de vida con implements On..
export class ConEstadoComponent implements OnInit, OnDestroy {
  // instanciamos
  modeloTienda: Tienda = new Tienda();
  // array tipo producto
  itemComprados:Array<Producto>;
  precioTotal:number;
  
  // expone los elementos que se encuentra dentro de un componente hijo
  // static false se usa para angular 8 o superior
  @ViewChild(AlertaConfirmacionComponent,{static:false})
  // creamos instancia
  alertChild:AlertaConfirmacionComponent;
  constructor() {
    // le asignamos un array vacio
    this.itemComprados = [];
   }

  ngOnInit(): void {
  }
  // cuando cerremos el componente, como cerrar el navegador etc...
  ngOnDestroy(): void {
    // this.tiendaSuscription.unsubscribe();
  }
  selecionarItem(item){
    // agregamos al array el item
    this.itemComprados.push(item);
  }
  // capturar el output
  onProductoSeleccionado(_event:Producto){
    // llamamos al metodo pasandole el parametro de lo capturado
    this.selecionarItem(_event);
  }
  // precio total
  getPrecioTotal(){
    if(this.itemComprados){
      // con reduce para hacer un proceso para sumar
      return this.itemComprados.reduce(
        // declaramos como parametro al evento flecha
        (prev:number, item:Producto)=> prev + item.precio,
        0
      );
    }
  }
  // invocamos el elemento dentro del componente
  realizarPago(){
    // obtenemos acceso directo al componente 
    this.alertChild.mostrar();
  }
  onPagar(){

  }

}
