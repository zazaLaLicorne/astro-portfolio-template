import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://isabellelamarre.fr",
  integrations: [
    tailwind(),
    compress(),
    sitemap({
      filter: (page) => {
    const pathname = page.startsWith("http") ? new URL(page).pathname : page;
    return pathname.replace(/\/+$/, "") !== "/m-legales";
  },
    }),

  ],
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },

    server: {
      headers: {
        "Content-Security-Policy": `
      default-src 'self';
      img-src 'self' data: https://res.cloudinary.com https://i.ytimg.com;
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://assets.calendly.com https://www.youtube.com;
      style-src 'self' 'unsafe-inline' https://assets.calendly.com;
      font-src 'self' data:;
      connect-src 'self' https://api.calendly.com https://res.cloudinary.com https://www.youtube.com;
      frame-src https://calendly.com https://www.youtube.com https://www.youtube-nocookie.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
    `
          .replace(/\s{2,}/g, " ")
          .trim(),
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Permissions-Policy":
          "geolocation=(), camera=(), microphone=(), payment=()",
        "Strict-Transport-Security":
          "max-age=63072000; includeSubDomains; preload",
      },
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["res.cloudinary.com"],
  },
});
