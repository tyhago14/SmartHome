import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000,
        host: true,
    },
    base: "/",
    build: {
        manifest: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: "./src/App.jsx",
                Login: "src/Pages/Login/Login.jsx",
                Dashboard: "src/Pages/Dashboard/Dashboard.jsx",
                Conta: "src/Pages/Conta/Conta.jsx",
                Dispositivos: "src/Pages/Dispositivos/Dispositivos.jsx",
            },
        },
    },
});
