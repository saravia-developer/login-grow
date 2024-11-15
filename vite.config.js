import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const replacePlugin = (mode) => {
//   return {
//     name: "html-inject-env",
//     transformIndexHtml: (html) => {
//       // if(mode === "prodcut")
//     }
//   }
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
