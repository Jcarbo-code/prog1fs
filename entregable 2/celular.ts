class Celular {
    private marca: String;
    private modelo: String;
    private io: String;
    private ram: number;
    private almacenamiento: number;
    private encendido: boolean;

    constructor(marca: String, modelo: String, io: String) {
        this.marca = marca;
        this.modelo = modelo;
        this.io = io;
        this.ram = 4;
        this.almacenamiento = 64;
        this.encendido = false;
    }

    gettMarca(): String {
        return this.marca;
    }

    settMarca(String): void {
        this.marca;
    }

    gettModelo(): String {
        return this.modelo;
    }

    settModelo(String): void {
        this.modelo;
    }

    gettIo(): String {
        return this.io;
    }

    settIo(String): void {
        this.io;
    }

    gettRam(): Number {
        return this.ram;
    }

    settRam(number): void {
        this.ram;
    }

    gettAlmacenamiento(): Number {
        return this.almacenamiento;
    }

    settAlmacenamiento(number): void {
        this.almacenamiento;
    }

    gettEncendido(): Boolean {
        return this.encendido;
    }

    gettEstado() {
        if (this.encendido) return "encendido";
        else return "apagado";
    }

    settEncendido(boolean): void {
        this.encendido;
    }

    encenderApagar() {
        if (this.encendido) {
            this.settEncendido(false);
        } else this.settEncendido(true);
    }

    mostrarInfo(): String {
        return ("Marca: " + this.gettMarca() + " Modelo: " + this.gettModelo() + " Io: " + this.gettIo() + " RAM: " +
            this.gettRam() + " Almacenamiento: " + this.gettAlmacenamiento() + " Estado: " + this.gettEstado());
    }
}