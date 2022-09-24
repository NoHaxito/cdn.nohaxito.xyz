import express from 'express';
import { handler as ssrHandler } from '../frontend/dist/server/entry.mjs';
const port = process.env.PORT || 8080
const app = express();
app.use(express.static('./frontend/dist/client/'))
app.use(ssrHandler);

app.listen(port, () => {
console.log(`Uploader.io serving in port ${port}`)
})