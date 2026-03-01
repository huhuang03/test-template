import ts from 'rollup-plugin-ts'
import copy from 'rollup-plugin-copy'
import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync('package.json', {encoding: 'utf8'}));

export default [
  {
    plugins: [
      ts(),
      // copy({
      //   targets: [{
      //     src: 'template_data/**/*',
      //     dest: 'lib/template_data',
      //     flatten: false,
      //   }]
      // })
    ],
    input: 'src/index.ts',
    output: {
      sourcemap: true,
      format: 'cjs',
      file: pkg.main,
      banner: '#!/usr/bin/env node\n'
    }
  }
]
