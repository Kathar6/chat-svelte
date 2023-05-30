import { DEFAULT_HEADERS } from './config';

// Types
import type { HttpMethods } from './types';

class HttpClient {
	private headers: HeadersInit = DEFAULT_HEADERS;
	private body?: BodyInit;
	private config?: RequestInit;

	constructor();
	constructor(body?: BodyInit);
	constructor(headers?: HeadersInit, body?: BodyInit);
	constructor(...args: any[]) {
		if (!args.length) throw new Error('Expected at least one argument');

		if (args.length === 1) {
			this.onlyBody(args[0] as BodyInit);
		}
		if (args.length >= 2) {
			const headers = args[0] as HeadersInit;
			const body = args[1] as BodyInit;
			this.initAll(headers, body);
		}
	}

	private onlyBody(body: BodyInit) {
		this.body = body;
	}

	private initAll(headers?: HeadersInit, body?: BodyInit) {
		if (headers)
			this.headers = {
				...this.headers,
				...headers
			};
		if (body) this.body = body;
	}

	private bootstrap(url: string, method: HttpMethods) {
		console.log(this.config);
		return fetch(url, {
			headers: this.headers,
			method,
			body: this.body,
			...this.config
		});
	}

	setConfig(config: RequestInit) {
		this.config = config;
		return this;
	}

	get(url: string) {
		return this.bootstrap(url, 'GET');
	}

	post(url: string) {
		return this.bootstrap(url, 'POST');
	}

	put(url: string) {
		return this.bootstrap(url, 'PUT');
	}

	patch(url: string) {
		return this.bootstrap(url, 'PATCH');
	}

	delete(url: string) {
		return this.bootstrap(url, 'DELETE');
	}
}

export default HttpClient;
