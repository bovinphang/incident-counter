import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [createVuePlugin()],
    resolve: {
        /* 添加alias规则 */
        alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
        /* 暂时先加.vue, .js, .json */
        extensions: ['.vue', '.js', '.json']
    },
    /*   css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/mixin.scss";',
      },
    },
  }, 
  return:{
    base:'/'
  },*/
    build: {
        rollupOptions: {
            output: {
                //静态资源分类打包
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
    },
    server: {
        port: 3030
    }
});
