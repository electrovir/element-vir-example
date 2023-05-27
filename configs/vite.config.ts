import {defineConfig} from 'vite';

export default defineConfig({
  clearScreen: false,
  root: process.cwd(),
  base: process.env.CI ? '/element-vir-example' : '',
});
