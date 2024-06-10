function SampleText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });
    return data;
}

function SampleImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    });
    return data;
}

function SampleAudio(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }
    });
    return data;
}

function SampleVideo(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://www.youtube.com/watch?v=9bZkp7q19f0"
        }
    });
    return data;
}

function SampleDocument(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        }
    });
    return data;
}

function SampleLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "longitude": 37.7749,
            "latitude": -122.4194
        }
    });
    return data;
}

function SampleButtons(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Yes"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

function SampleList(number) {
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


module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleLocation,
    SampleButtons,
    SampleList,
};
