import typescript from '@rollup/plugin-typescript';

export default [{
  input: 'src/index.ts',
  output: [{
    sourcemap: true,
    dir: './lib',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src'
  }],
  plugins: [typescript()]
}, {
  input: 'src/index.ts',
  output: [{
    sourcemap: true,
    file: './lib/index.cjs.js',
    format: 'cjs'
  }],
  plugins: [typescript()]
}];