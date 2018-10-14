const {Stitch, AnonymousCredential} = require('mongodb-stitch-browser-sdk');
const dbClient = Stitch.initializeDefaultAppClient('dndsheets-lukpd');

dbClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
  // const mdb = dbClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    // dbClient.close();

  // dbClient.callFunction("createCharacter", ["Hello world!"]).then(echoedResult => {
  // console.log(`Echoed result: ${echoedResult}`);
// })

}).catch(err => {
    console.log(err);
    dbClient.close();
})