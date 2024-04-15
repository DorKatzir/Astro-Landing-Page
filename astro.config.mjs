import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({

    integrations: [icon(), relativeLinks()],
    outDir: './docs',
    compressHTML: false,
    build: {
        assets: 'css'
    }
});
