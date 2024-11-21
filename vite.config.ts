import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigAlias from "vite-tsconfig-paths";

export default defineConfig({
    base: `./`,
    build: { outDir: `dist/react` },
    plugins: [ react(), tsconfigAlias() ],
    server: { port: 3000, strictPort: true }
});