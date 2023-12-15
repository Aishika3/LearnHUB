import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-oauth/google'],
  },
  optimizeDeps: {
    include: ['node-summary'],
  },
  resolve: {
    alias: {
      '@emailjs/browser': '@emailjs/browser/dist/email.min.js',
    },
  },
})
