import { client } from "./connectDb.js";


export async function addClothes(){
    const addItem = await client.query("INSERT INTO clothes (id, productName, sizing, color, price) VALUES (0, 'Gucci shirt', 's', 'red', 99.99)")
    console.table(addItem.rows)
}