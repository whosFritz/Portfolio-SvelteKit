import { handler } from './build/handler.js';
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});