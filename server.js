import { handler } from './build/handler.js';
import express from 'express';
const app = express();

app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});