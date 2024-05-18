import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

const staticDir = 'statics';
export default defineConfig({
  plugins: [
    basicSsl(),
  ],
  build: {
    sourcemap: true,
    target: ['chrome104', 'firefox104', 'safari15.6', 'edge104'],
    commonjsOptions: {
      ignoreTryCatch: false,
    },
    outDir: 'dist',
    assetsDir: staticDir,
    copyPublicDir: true,
    reportCompressedSize: true, // gzip压缩大小报告
    chunkSizeWarningLimit: 10, // 单位为KB,
    rollupOptions: {
      output: {
        chunkFileNames: `${staticDir}/js/[name]-[hash].js`,
        entryFileNames: `${staticDir}/js/[name]-[hash].js`,
        assetFileNames: `${staticDir}/[ext]/[name]-[hash].[ext]`,
      },
    },
  },
  server: {
    https: true,
    proxy: {
      '^/(?:efficiency|ws|xxx)/.*': {
        changeOrigin: true,
        ws: true,
        target: 'http://127.0.0.1:8000',
      },
    },
  },
});
