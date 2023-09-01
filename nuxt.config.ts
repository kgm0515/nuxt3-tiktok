// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  // Add tailwindcss and autoprefixer to the postcss.plugins object in your nuxt.config.js file.
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Add your newly-created ./assets/css/main.css to the css array in your nuxt.config.js file.
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-icon", // https://github.com/nuxt-modules/icon
    "@pinia/nuxt", //
    "@pinia-plugin-persistedstate/nuxt", // pinia持久化
  ],
});
