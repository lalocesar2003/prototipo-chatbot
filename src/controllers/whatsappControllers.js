const fs =require('fs');

const myConsole=new console.Console(fs.createWriteStream('./logs.txt'));
const processMessage = require('../shared/processMessage');


const Verifytoken = async (req, res) => {
    
    try {
        var accesToken="";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];


        if (challenge != null && token != null && token == accesToken) {
            res.status(200).send(challenge)
        }else {
            res.status(400).send("Error, wrong token")
        }
    } catch (e) {
        res.status(400).send(e)
    }

}

const RecievedMessage = async (req, res) => {
   try {

    var entry=(req.body["entry"])[0];
    var changes=(entry["changes"])[0];
    var value=(changes["value"]);
    var messageObject=value["messages"];

    if(typeof messageObject != 'undefined'){
        
    var messages=messageObject[0];
    var number=messages["from"];

    var text=GetTextUser(messages);

        if(text != ""){
            processMessage.Process(text,number);
            
        }
 
    }
res.send("EVENT_RECEIVED") 
   
}
catch (e) {
    res.status(400).send(e)
res.send("EVENT_RECEIVED") 
}
}

function GetTextUser(messages){
    var text = "";
    var typeMessage = messages["type"];
    if(typeMessage == "text"){
        text = (messages["text"]["body"]);
    }
    else if(typeMessage == "interactive"){
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        myConsole.log(typeInteractive);

        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}

module.exports = {
    Verifytoken,
    RecievedMessage,
    GetTextUser

}