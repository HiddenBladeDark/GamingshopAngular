
export class Tienda {
    tiendaItems:Array<Object>;

    constructor(){
        this.tiendaItems = [
            {
                titulo:"RTX 2060 SUPER",
                texto:"Poderosa GPU para los juegos TRIPLE AAA actuales",
                imagen:"rtx2060.png",
                precio:1800000
            },
            {
                titulo:"RYZEN 5 3600G",
                texto:"Procesador mejores de la tercera generacion y de los intel i5",
                imagen:"ryzen5.jpg",
                precio:700000
            },
            {
                titulo:"B450M ASUS GAMING",
                texto:"Board que acepta todo tipo de grafica.",
                imagen:"asus.jpg",
                precio:800000
            },
            {
                titulo:"MONITOR 145Hz REPUBLIC GAMING",
                texto:"El mejor para los juegos MOBA y competitivos con tiempo de respuesta 1ms",
                imagen:"monitor.jpg",
                precio:1200000
            }
        ]
    }
}
