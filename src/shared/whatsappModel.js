function MessageText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": "true", 
            "body": textResponse
        },
        "type": "text"
    });
    return data;
 }

 function MessageList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una opción"
            },
            "action": {
                "button": "ver opciones",
                "sections": [
                    {
                        "title": "compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende productos que ya no uses"
                            }
                        ]
                    },
                    {
                        "title": "📍centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "PUEDES VISITAR NUESTRA AGENCIA MAS CERCANA"
                            },
                            {
                                "id": "main-contacto",
                                "title": "centro de Contacto",
                                "description": "Contacta a un asesor"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
function MessageComprar(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿SELECCIONA UNO DE LOS PRODUCTOS?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-Computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
function MessageLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
          "longitude": "-74.0060",
        "latitude": "40.7128",
        "name": "New York City",
        "address": "456 Broadway"
        }
    });
    return data;
}

 module.exports = {
    MessageText,
    MessageList,
    MessageComprar,
    MessageLocation
 }