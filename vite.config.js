import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Good: sets src/ as project root
  server: {
    host: true, // Listens on all interfaces (required for CSB external access)
    allowedHosts: [".csb.app"], // Allows any subdomain of csb.app (e.g., *.csb.app)
  },
});
