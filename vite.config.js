import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration. The React plugin enables JSX + fast refresh.
export default defineConfig({
  plugins: [react()],
})
