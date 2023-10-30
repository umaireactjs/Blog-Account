import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {},
  },

  plugins: [react()],
});



// const arr= [1,3,5,7] PACKED_SMI_ELEMENTS   ( continoues = packed most optimized)