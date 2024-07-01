import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// Dynamically import vite-plugin-static-copy
async function getPlugins() {
  const { viteStaticCopy } = await import("vite-plugin-static-copy");
  return [
    react(),
    dts({
      tsconfigPath: "tsconfig.json",
      outDir: "dist",
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "src/styles/tailwind.config.js"),
          dest: ".",
        },
      ],
    }),
  ];
}

export default defineConfig(async () => {
  const plugins = await getPlugins();

  return {
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${path.resolve(__dirname, "src/styles/variables.scss")}";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      lib: {
        entry: "src/index.ts",
        name: "SurfaceComponents",
        fileName: (format) => `surface-components.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      outDir: "dist",
      cssCodeSplit: true,
    },
  };
});
