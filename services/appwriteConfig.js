import { Client, Account,Databases,Query,ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('645f6479dc1a58ddb3b5');               // Your project ID

const account = new Account(client);
const databases = new Databases(client);

subscribe=(callback)=>{
    return this.appwrite.subscribe('collections.${this.tasksCollection}.documents')
}

export {account,databases,Query,ID,client};


// Register User


// Subscribe to files channel
// client.subscribe('files', response => {
//     if(response.events.includes('buckets.*.files.*.create')) {
//         // Log when a new file is uploaded
//         console.log(response.payload);
//     }
// });