// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                contact: resolve(__dirname, "/pages/contact.html"),
                error: resolve(__dirname, "/pages/404.html"),
                servererror: resolve(__dirname, "/pages/500.html"),
            },
        },
    },
});
