var hora = 10;

if (hora < 12) {
    console.log("Bom dia");

}else if(hora == 12 || hora == 18)
{
    console.log("Você está na hora do rush");

}else if(hora > 12 && hora < 18){

    console.log("Boa tarde");
}else{

    console.log("boa noite");
}