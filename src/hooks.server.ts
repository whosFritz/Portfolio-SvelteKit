import { start_mongo } from "./db/mongo";
import { THEMES } from "$lib/index";


start_mongo();

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
