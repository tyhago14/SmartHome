import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/SmartHome",
    server: {
        port: 8000,
        host: true,
    },
    build: {
        manifest: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: "./src/App.jsx",
                Pages: "./src/Pages/**/*.jsx",
            },
        },
        // Update the outDir option to point to the root of your GitHub Pages repository
        outDir: "./public",
    },
});
