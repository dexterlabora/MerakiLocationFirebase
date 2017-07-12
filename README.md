# Meraki Location Scanning API
*With Firebase Functions & Database*

# Overview
A simple Meraki Location Scanning API receiver which stores
the data in a Firebase database.

# Install
* Clone Repository
* Change into the app directory
* Change into to the functions directory
* Install NodeJS Dependencies
```
git clone <repository> MerakiLocationFirebase
cd MerakiLocationFirebase
cd functions
npm install 
```

* Update your Validator and Secret
Open `functions/index.js` and set the validator and secret variables. The validator is provided on the Meraki Dashboard page when enabling the Scanning API. The secret is defined by you and must match the configuration in the Meraki Dashboard.

* Install Firebase Utilities and then Deploy
```
npm install -g firebase-tools
```

* Update the `functions/index.js` file with your validator and secret 
```
nano index.js
~~~~~~~~~~
const functions = require('firebase-functions');
const firebase = require('firebase');
const validator = "8e0846499d9a3f6c23f7868c4c25b9d6325035f5" // Your Validator provide by Meraki
const secret = "YourSecret"; // Your self defined secret
~~~~~~~~~~
```

* Deploy the app to Google Firebase
```
firebase deploy
```



## More Info
### Deploying Firebase Functions
https://firebase.google.com/docs/functions/get-started

### Meraki Scanning API Documentation
https://documentation.meraki.com/MR/Monitoring_and_Reporting/Location_Analytics#CMX_Location_API


