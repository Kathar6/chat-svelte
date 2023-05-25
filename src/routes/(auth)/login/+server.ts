import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = ((event) => {
	console.log(...event.request.headers);
	return json({
		userAgent: event.request.headers.get('user-agent')
	});
}) satisfies RequestHandler;

export const POST = ((event) => {
  return json({
    
  })
}) satisfies RequestHandler;