import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import dts from 'vite-plugin-dts'

const buildVersion = process.env.BUILD_VERSION;

console.log(buildVersion)

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    ...(buildVersion && { VITE_BUILD_VERSION: JSON.stringify(buildVersion) }),
  },
  plugins: [
    react(),
    dts(),
    federation({
      name: `remote_app${buildVersion ? `@${buildVersion}` : ''}`,
      filename: "remoteEntry.js",
      exposes: {
        './Button': './src/components/Button'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    ...(buildVersion && { outDir: `./dist/${buildVersion}` }),
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
