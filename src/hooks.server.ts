import { THEMES } from "$lib/index";
import { connect } from './db/mongo';

// Connect to MongoDB before starting the server
connect().then((): void => {
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
