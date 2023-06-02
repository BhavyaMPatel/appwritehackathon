import { Client, Account,Databases,Query,ID,Permission } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('645f6479dc1a58ddb3b5');         // Your project ID

const account = new Account(client);
const databases = new Databases(client);

export {account,databases,Query,ID,client};



