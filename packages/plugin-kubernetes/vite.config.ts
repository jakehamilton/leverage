import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            name: "PluginKubernetes",
            entry: "./src/index.ts",
            fileName: (format) => `plugin.${format}.js`,
            formats: ["es", "umd", "cjs"],
        },
        rollupOptions: {
            external: [
                "@senchou/core",
                "@leverage/core",
                "@senchou/helm",
                "child_process",
            ],
        },
    },
});
