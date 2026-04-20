import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
    strictPort: true,
    host: '0.0.0.0'
  }
})