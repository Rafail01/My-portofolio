import { defineConfig } from 'vite'
import ssg from './src/vite-plugin'
import devServer from '@hono/vite-dev-server'

const entry = './src/index.tsx'

export default defineConfig(() => {
  return {
    base: './', // ✅ Προσθήκη αυτής της γραμμής
    plugins: [devServer({ entry }), ssg({ entry })],
    build: {
      outDir: 'dist',
    }
  }
})
