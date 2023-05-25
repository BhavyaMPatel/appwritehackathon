import { Client, Databases } from 'node-appwrite';

// Init SDK
const nodeclient = new Client();

const nodedatabase = new Databases(nodeclient);

nodeclient
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('645f6479dc1a58ddb3b5') // Your project ID
    .setKey('e48d49263f9ed9fd468b4c20af7b3271e416321081c117c75ecdada8994a9aad8dc48be3d524a099bbe6594eadf12d01b040230883b5e4c8445f9cdb06907755a75774561a2d34bb22e1baecaa7f311f498ae080fdc770c6ac99ebf191fc2d6b79c63fb866b338f44fa165c5ee8746352599f1388f92fbd68149dd257040354d') // Your secret API key
;

export {nodeclient,nodedatabase}