import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginRequire from "vite-plugin-require";

// import fs from "fs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire().default()],
  optimizeDeps: {
    include: ["linked-dep"],
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              // i modified the regex here
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
});
