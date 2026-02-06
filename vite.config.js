import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/',   // ⭐ Github.io için DOĞRU PATH
  plugins: [react(), tailwindcss()],
})
