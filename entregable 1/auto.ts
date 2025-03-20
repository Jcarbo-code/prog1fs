class Auto {
    private marca: String;
    private modelo: String;
    private anio: number;

    constructor (marca:String,modelo:String,anio:number) {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }

    getMarca (String){
        return this.marca;
    }

    getModelo(String){
        return this.modelo;
    }

    getAnio(number){
        return this.anio;
    }

    acelerar() {
        console.log("estas acelerando");
    }

    frenar() {
        console.log("frenaste");
    }
}