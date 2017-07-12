const functions = require('firebase-functions');
const firebase = require('firebase');
const validator = "123412412341234123412341234234" // Your Validator provided by Meraki
const secret = "YourSecret"; // Your self defined secret

const appConfig = functions.config().firebase;
firebase.initializeApp(appConfig);
//var db = functions.database();
// Client and Server Data Fetching Logic
// Uses either the client firebase (initialized from hosting init script)
// Or serverside firebase
var database = firebase.database();


// Write to firebase database
function storeData(data) {


    // store by Access Point MAC
    /*
    data.data.observations.forEach(ap => {
        var macStr = ap.apMac.replace(/:/g,'');
        database.ref('location/wifi/'+macStr).set(ap);
    });
    */

    // store by Client MAC
    data.data.observations.forEach(client => {     
        client.apMac = data.data.apMac;    
        database.ref('location/'+data.type+'/'+client.clientMac).set(client);
    });
  
    // store only last observation
    //database.ref('location/wifi/').set(data.data);

    // store all records with timestamp
    /*
    var date = new Date;
    database.ref('location/wifi/' + date.getTime()).set(data.data);
    */
}

exports.scanning = functions.https.onRequest((request, response) => {
    switch(request.method){
        case "GET":
            response.send(validator);
            break;
        case "POST":
            if(request.body.secret == secret) {
                console.log("Secret verified");
                storeData(request.body);
                response.status(200); 
            } else {
                console.log("Secret was invalid");
                response.status(501); 
            }
            response.send(request.body);
            break;
        default:
            response.status(400);          
            response.send("invalid method "+ request.method)
    }

    
 });
