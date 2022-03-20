import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./dist/index.js",
    plugins: [nodeResolve(), commonjs(), terser()],
    output: [
      {
        exports: "auto",
        name: "emojid",
        file: "lib/emojid.min.js",
        format: "cjs",
      },
    ],
  },
  {
    input: "./dist/index.js",
    plugins: [nodeResolve(), commonjs(), terser()],
    output: [
      {
        exports: "auto",
        name: "emojid",
        file: "lib/emojid-iife.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./dist/index.js",
    plugins: [nodeResolve(), esbuild(), terser()],
    output: [
      {
        exports: "auto",
        name: "emojid",
        file: "lib/emojid.esm.js",
        format: "esm",
      },
    ],
  },
  {
    input: "./dist/index.d.ts",
    plugins: [dts()],
    output: {
      file: "lib/emojid.d.ts",
      format: "es",
    },
  },
];
