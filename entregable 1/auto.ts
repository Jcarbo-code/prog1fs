class Auto {
    private marca: String;
    private modelo: String;
    private anio: number;

    constructor (marca:String,modelo:String,anio:number) {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }

    getMarca (){
        return this.marca;
    }

    getModelo(){
        return this.modelo;
    }

    getAnio(){
        return this.anio;
    }

    acelerar() {
        console.log("estas acelerando");
    }

    frenar() {
        console.log("frenaste");
    }
}