import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./src/index.js",
  resolve: { fallback: { fs: false } },
  devtool: 'source-map',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
