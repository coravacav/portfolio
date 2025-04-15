import { console } from 'node:inspector/promises';
import init, { perform_steps } from 'rjplc-wasm';

export async function POST(request: Request) {
	await init();

	try {
		let body = await request.text();
		body = `${body}\n`; // Never hurts to add an extra one.
		const compilerOutput = perform_steps(body);

		if (compilerOutput.parse_success) {
			return new Response(compilerOutput.parse_output, {
				headers: {
					'Content-Type': 'text/plain',
				},
			});
		}

		if (compilerOutput.lex_success) {
			return new Response("Couldn't parse, succeeded up to lex:\n" + compilerOutput.lex_output, {
				headers: {
					'Content-Type': 'text/plain',
				},
			});
		}

		throw new Error('Unknown error occured\n');
	} catch (e) {
		return new Response(e.message, { status: 500 });
	}
}
