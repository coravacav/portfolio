import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
	...nextVitals,
	{
		ignores: ["rjplc-wasm/**"],
	},
];

export default config;
