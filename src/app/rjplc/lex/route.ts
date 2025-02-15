import { console } from 'node:inspector/promises';
import init, { perform_steps } from 'rjplc-wasm';
import wasm from 'rjplc-wasm/rjplc_wasm_bg.wasm';

export async function POST(request: Request) {
	await init(wasm);

	try {
		let body = await request.text();
		body = `${body}\n`; // Never hurts to add an extra one.
		const compilerOutput = perform_steps(body);

		if (compilerOutput.lex_success) {
			return new Response(compilerOutput.lex_output, {
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
