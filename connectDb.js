import { connectionURI } from "./secrets.js";
import pg from 'pg';

const { Client } = pg;

export const client = new Client({
    connectionString:connectionURI,
})

export async function openConnection(){
    await client.connect();
}
export async function closeConnection(){
    await client.end();
}