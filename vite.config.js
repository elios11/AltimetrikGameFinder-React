import path from 'path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Alias for the src directory
            '@components': path.resolve(__dirname, 'src/components'), // Alias for the components directory
            '@utils': path.resolve(__dirname, 'src/utils'), // Alias for the utils directory
            '@api': path.resolve(__dirname, 'src/api'), // Alias for the api directory
            '@hooks': path.resolve(__dirname, 'src/hooks'), // Alias for the hooks directory
            '@pages': path.resolve(__dirname, 'src/pages'), // Alias for the pages directory
        },
    },
});
