export type TechKey =
  | "astro"
  | "canva"
  | "cloudinary"
  | "css"
  | "daisyui"
  | "express"
  | "figma"
  | "ga"
  | "github"
  | "gsc"
  | "html"
  | "js"
  | "mongodb"
  | "next"
  | "node"
  | "notion"
  | "react"
  | "reactnative"
  | "shadcnui"
  | "tailwind"
  | "ts"
  | "vercel"
  | "vscode";

export interface TechMeta {
  label: string;
  icon: string;
}

export const TECH_REGISTRY: Record<TechKey, TechMeta> = {
  astro: {
    label: "Astro",
    icon: "/icons/tech/astro.webp",
  },
  canva: {
    label: "Canva",
    icon: "/icons/tech/canva.webp",
  },
  cloudinary: {
    label: "Cloudinary",
    icon: "/icons/tech/cloudinary.webp",
  },
  css: {
    label: "CSS",
    icon: "/icons/tech/css.webp",
  },
  daisyui: {
    label: "DaisyUI",
    icon: "/icons/tech/daisyui.webp",
  },
  express: {
    label: "Express",
    icon: "/icons/tech/express.webp",
  },
  figma: {
    label: "Figma",
    icon: "/icons/tech/figma.webp",
  },
  ga: {
    label: "Google Analytics",
    icon: "/icons/tech/google-analytics.webp",
  },
  github: {
    label: "GitHub",
    icon: "/icons/tech/github.webp",
  },
  gsc: {
    label: "Google Search Console",
    icon: "/icons/tech/google-search-console.webp",
  },
  html: {
    label: "HTML",
    icon: "/icons/tech/html.webp",
  },
  js: {
    label: "JavaScript",
    icon: "/icons/tech/javascript.webp",
  },
  mongodb: {
    label: "MongoDB",
    icon: "/icons/tech/mongodb.webp",
  },
  next: {
    label: "Next.js",
    icon: "/icons/tech/next.webp",
  },
  node: {
    label: "Node.js",
    icon: "/icons/tech/node-js.webp",
  },
  notion: {
    label: "Notion",
    icon: "/icons/tech/notion.webp",
  },
  react: {
    label: "React",
    icon: "/icons/tech/react.webp",
  },
  reactnative: {
    label: "React Native",
    icon: "/icons/tech/react-native.webp",
  },
  shadcnui: {
    label: "shadcn/ui",
    icon: "/icons/tech/shadcn-ui.webp",
  },
  tailwind: {
    label: "Tailwind CSS",
    icon: "/icons/tech/tailwindcss.webp",
  },
  ts: {
    label: "TypeScript",
    icon: "/icons/tech/typescript.webp",
  },
  vercel: {
    label: "Vercel",
    icon: "/icons/tech/vercel.webp",
  },
  vscode: {
    label: "VS Code",
    icon: "/icons/tech/vscode.webp",
  },
};
