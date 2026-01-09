import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const isProd = process.env.NODE_ENV === "production";

const config = defineConfig({
  plugins: [
    devtools(),
    nitro({
      externals: {
        inline: [
          "@react-three/drei", 
          "@react-three/fiber", 
          "@tabler/icons-react"
        ]
      }
    }),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      router: {
        entry: "./routing/router.tsx",
        routesDirectory: "./routing/routes",
        generatedRouteTree: "./routing/routeTree.gen.ts",
      },
    }),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  ...(isProd
    ? {
        ssr: {
          noExternal: [
            "@react-three/fiber",
            "@react-three/drei",
            "@tabler/icons-react",
          ],
        },
      }
    : {}),
});

export default config;
