import { addClothes } from "./clothes.js"
import { closeConnection, openConnection } from"./connectDb.js"
await openConnection();
await addClothes();
closeConnection()