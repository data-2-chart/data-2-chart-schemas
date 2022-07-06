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
}];