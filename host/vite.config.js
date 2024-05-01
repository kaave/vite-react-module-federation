import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        name: 'host',
        // remoteApp: 'http://localhost:5001/latest/assets/remoteEntry.js',
        // remoteApp: 'http://localhost:5001/1/assets/remoteEntry.js',
        // remoteApp: 'http://localhost:5001/1.2/assets/remoteEntry.js',
        remoteApp: 'http://localhost:5001/1.2.3/assets/remoteEntry.js',
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
