const whatsappModel = require('../shared/whatsappModel');
const whatsappService = require('../services/whatsappService');

function Process(textUser,number){
    textUser=textUser.toLowerCase();
    var models = [];
    if(textUser.includes("hola")){
        models.push(whatsappModel.MessageText("Hola, ¿En qué puedo ayudarte?",number));
        models.push(whatsappModel.MessageList(number));
    }
    else if(textUser.includes("adios") || textUser.includes("chao") || textUser.includes("bye")){
        models.push(whatsappModel.MessageText("Adios, espero verte pronto",number));
        
    }
    else if(textUser.includes("gracias")){
        models.push(whatsappModel.MessageText("De nada, es un placer ayudarte",number));
       
    }
    else if(textUser.includes("comprar")){
        models.push(whatsappModel.MessageComprar(number));
       
    }
    else if(textUser.includes("vender")){
        models.push(whatsappModel.MessageText("puedes llenar el siguiente formulario ",number));
       
    }
    else if(textUser.includes("agencia")){
        models.push(whatsappModel.MessageLocation(number));
        models.push(whatsappModel.MessageText("parece que no funciona location ",number));
       
    }
    else if(textUser.includes("contacto")){
        models.push(whatsappModel.MessageText("Puedes contactarnos al 123456789",number));
       
    }

    else{
        models.push(whatsappModel.MessageText("no entiendo lo que dices ",number));
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}
module.exports = {
    Process
}