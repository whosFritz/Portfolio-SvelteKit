import { THEMES } from "$lib/index";
import { connectDB } from './db/mongo';
import { env } from '$env/dynamic/private';
import { MongoClient } from "mongodb";

// das geht:
console.log("ENV", env.MONGODB_URL);

// das nicht:
const url = env.MONGODB_URL;
console.log("const", url, Boolean(url));

if (url) {
	const client = new MongoClient(env.MONGODB_URL!);
	console.log("MongoDB Client erstellt connecte jetzt...");
	await client.connect();
	console.log("MongoDB geht");
}


// Connect to MongoDB before starting the server
connectDB().then((): void => {
	console.log("MongoDB started");
}).catch((e) => {
	console.log("MongoDB failed to start:", e);
});

export const handle = async ({ event, resolve }) => {
	const theme = event.cookies.get("theme");

	if (!theme || !Object.values(THEMES).includes(theme)) {
		return await resolve(event);
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace(
				'data-theme=""',
				`data-theme="${theme}"`
			);
		},
	});
};
