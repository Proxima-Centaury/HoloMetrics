import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: `./`,
    build: {
        outDir: `dist/react`
    },
    plugins: [ react() ],
    server: {
        port: 3000,
        strictPort: true
    }
});