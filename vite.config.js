import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-vite-gh-pages-boilerplate/",
  plugins: [react()]
})

// base: "https://ljsimpkin.github.io/react-vite-gh-pages-boilerplate/",
