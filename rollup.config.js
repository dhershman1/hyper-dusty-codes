import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'

const prod = process.env.NODE_ENV === 'production'

export default {
  input: 'src/app.js',
  plugins: [
    resolve(),
    buble({ jsx: 'h' }),
    // commonjs(),
    buble(),
    prod && terser(),
    !prod && livereload('static')
  ],
  watch: {
    chokidar: true,
    include: 'src/**',
    exclude: 'node_modules/**',
    clearScreen: false
  },
  output: {
    file: 'static/index.js',
    sourcemap: !prod ? 'inline' : false,
    format: 'iife'
  }
}
