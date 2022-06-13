let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function () {
        this.ligado = true;
        console.log("Vrum vrum vrum");
    },
    acelerar: function () {
        if (this.ligado == true) {
            console.log("Riiiiiihh");
        }else {
            console.log(this.nome+ " " + this.modelo+ " não está ligado")
        }
    }
};


console.log("Modelo: " + carro.modelo);

carro.ligar();
carro.acelerar();


let carros = [
    {nome: 'Fiat', modelo:'Palio'},
    {nome: 'Fiat', modelo:'Uno'},
    {nome: 'Toyata', modelo:'Carolla'},
    {nome: 'Ferrari', modelo:'Spider'},
];

console.log(carros[0].modelo);