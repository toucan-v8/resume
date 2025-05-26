// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/sitemap"],
  css: ["~/assets/main.css"],
  ssr: true,
  app: {
    baseURL: "/resume/",
  },
  site: {
    url: "https://toucan-v8.github.io/",
  },
  sitemap: {
    xsl: false,
    exclude: ["/resume/resume"],
  },
});
