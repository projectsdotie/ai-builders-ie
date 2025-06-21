import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimise bundle size
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    
    // Enable source maps for production debugging
    sourcemap: false,
    
    // Optimise chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar', '@radix-ui/react-dialog'],
          'query-vendor': ['@tanstack/react-query'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          
          // Component chunks
          'ui-components': [
            './src/components/ui/button',
            './src/components/ui/card',
            './src/components/ui/input',
            './src/components/ui/skeleton',
            './src/components/ui/toast'
          ],
          'page-components': [
            './src/components/Header',
            './src/components/Footer',
            './src/components/Hero',
            './src/components/Services',
            './src/components/About',
            './src/components/Contact'
          ]
        },
        
        // Optimise chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk';
          return `js/[name]-[hash].js`;
        },
        
        // Optimise asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name || '')) {
            return `images/[name]-[hash][extname]`;
          }
          
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `fonts/[name]-[hash][extname]`;
          }
          
          if (ext === 'css') {
            return `css/[name]-[hash][extname]`;
          }
          
          return `assets/[name]-[hash][extname]`;
        },
        
        // Entry file names
        entryFileNames: 'js/[name]-[hash].js',
      },
      
      // External dependencies (if using CDN)
      external: [],
    },
    
    // Optimise build performance
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // 4kb
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
  },
  
  // Optimise development
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  
  // Enable CSS preprocessing
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  
  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  
  // Preview server configuration
  preview: {
    port: 8080,
    host: true
  }
});
