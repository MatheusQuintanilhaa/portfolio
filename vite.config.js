import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Defina um alias para a pasta "assets"
      // Certifique-se de que o caminho corresponda à estrutura do seu projeto
      assets: "/src/assets",
    },
  },
});
