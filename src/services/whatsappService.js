const fs = require('fs');

const https = require('https');
function SendMessageWhatsApp(data){


    const options = {
        host: "graph.facebook.com",
        path: "/v19.0/369917222860931/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer"
        }
    };
    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = { SendMessageWhatsApp };
