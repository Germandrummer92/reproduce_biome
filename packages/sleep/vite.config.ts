import path from "node:path";

import type { BuildOptions } from "vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const watch: BuildOptions["watch"] =
		mode === "watch" ? { buildDelay: 500 } : undefined;

	return {
		plugins: [
			dts({
				insertTypesEntry: true,
			}),
		],
		build: {
			emptyOutDir: false,
			sourcemap: true,
			watch,
			lib: {
				entry: path.resolve(__dirname, "src/index.ts"),
				formats: ["es", "cjs"],
				fileName: "index",
			},
			rollupOptions: {
				external: [],
			},
		},
		test: {
			globals: true,
			environment: "node",
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
