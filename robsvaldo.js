//OLÁ, EU SOU O MICROONDAS ROBSVALDO! :)
//FAVOR ME USAR COM CUIDADO.

//--MENU--
//pipoca - 10 segundos
//macarrao - 8 segundos
//carne - 15 segundos
//feijao - 12 segundos
//brigadeiro - 8 segundos

//--INICIO DO ROBSVALDO--
function microondasRobsvaldo (opcao,tempo){

switch (opcao) {
    //--PIPOCA--
    case "pipoca":
        if (tempo <10) {
            console.log("Tempo insuficiente");    
        }else if(tempo == 10){
            console.log("Prato pronto, bom apetite!!");    
        }else if(tempo >10){
            console.log("Kabuuummmm");      
        }
    break;
    
    //--MACARRAO--
    case "macarrao":
        if (tempo <8) {
            console.log("Tempo insuficiente");    
        }else if(tempo == 8){
            console.log("Prato pronto, bom apetite!!");    
        }else if(tempo >8){
            console.log("Kabuuummmm");    
    }
    break;

    //--CARNE--
    case "carne":
        if (tempo <15) {
            console.log("Tempo insuficiente");    
        }else if(tempo == 15){
            console.log("Prato pronto, bom apetite!!");    
        }else if(tempo >15){
            console.log("Kabuuummmm");           
    }
    break;

    //--FEIJAO--
    case "feijao":
        if (tempo <12) {
            console.log("Tempo insuficiente");    
        }else if(tempo == 12){
            console.log("Prato pronto, bom apetite!!");    
        }else if(tempo >12){
            console.log("Kabuuummmm");    
            
        }else{
            console.log("Kabuuummmm"); 
    }
    break;

    //--BRIGADEIRO--
    case "brigadeiro":
        if (tempo <8) {
            console.log("Tempo insuficiente");    
        }else if(tempo == 8){
            console.log("Prato pronto, bom apetite!!");   
        }else if(tempo >8){
            console.log("Kabuuummmm");    
            
        }else{
            console.log("Kabuuummmm"); 
    }
    break;

    //--FORA DO MENU--
    default:
    console.log ("Prato inexistente");

}
}
//--FIM DO FUNCIONAMENTO--

//--ME USE AQUI--
//--EXEMPLO: microondas("opcao,segundos")
microondasRobsvaldo("pipoca",10) 

//--OBRIGADO PELA PREFERENCIA! :P--



