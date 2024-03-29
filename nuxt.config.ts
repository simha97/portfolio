// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: ["~/plugins/plyr.client.js", "~/plugins/bootstrap.js"],
});
