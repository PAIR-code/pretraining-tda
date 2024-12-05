import * as esbuild from 'esbuild'
import { litCssPlugin } from 'esbuild-plugin-lit-css';

async function main() {
  await esbuild.build({
    entryPoints: ['demo/index.ts'],
    bundle: true,
    sourcemap: true,
    outfile: 'dist/bundle.js',
    plugins: [
      litCssPlugin(),
    ],
  });
}

main();
