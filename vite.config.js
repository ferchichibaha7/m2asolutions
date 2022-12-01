// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                contact: resolve(__dirname, "/pages/contact.html"),
                customers: resolve(__dirname, "/pages/customers.html"),
                about: resolve(__dirname, "/pages/about.html"),
                pricing: resolve(__dirname, "/pages/pricing.html"),
                story: resolve(__dirname, "/pages/story.html"),
                blog: resolve(__dirname, "/pages/blog.html"),
                article: resolve(__dirname, "/pages/blog_single.html"),
                error: resolve(__dirname, "/pages/404.html"),
                servererror: resolve(__dirname, "/pages/500.html"),
                solution: resolve(__dirname, "/pages/solution.html"),
            },
        },
    },
});
