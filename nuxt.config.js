export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Solaris Bank",
    htmlAttrs: {
      lang: "en",
      "data-wf-domain": "solariskg.com",
      "data-wf-page": "Solaris Bank",
      "data-wf-site": "Solaris Bank",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content:
          "The best online banking for fast local & international transactions without limits...",
      },
      {
        property: "og:description",
        content:
          "The best online banking for fast local & international transactions without limits...",
      },
      {
        property: "og:image",
        content: "https://solariskg.com/SolarisBlack.png",
      },
      { property: "twitter:title", content: "Bank Manager" },
      {
        property: "twitter:image",
        content: "https://solariskg.com/SolarisBlack.png",
      },
      {
        property: "twitter:description",
        content:
          "The best online banking software to manage and automate banking activities...",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/css/dashboard.css",
        type: "text/css",
      },
      { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/custom.css" },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "anonymous",
      },
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        type: "text/javascript",
      },
      { src: "/scripts/touch.js", type: "text/javascript" },
      { src: "/scripts/query.js", type: "text/javascript" },
      { src: "/scripts/smartSupp.js", type: "text/javascript" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/fontLoader.js", mode: "client" },
    { src: "~/plugins/dashboardFontLoader.js", mode: "client" },
  ],

  router: {
    base: "/",
    middleware: ["isAuthenticated"],
  },

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh'
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: true,
        },

        endpoints: {
          login: { url: "/users/login", method: "post" },
          logout: false,
          user: { url: "/users/get-user", method: "get" },
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  generate: {
    routes: [
      // Add the confirmation route to the generated routes
    ],
  },

  axios: {
    baseURL: "https://solariskg.net/solaris/api",
  },

  publicRuntimeConfig: {
    FILE_URL: "https://solariskg.net/solaris/api/uploads",
  },

  // axios: {
  //   baseURL: "http://127.0.0.1/solaris/api",
  //   responseType: "json",
  // },

  // publicRuntimeConfig: {
  //   FILE_URL: "http://127.0.0.1/solaris/api/uploads",
  // },

  //Build Configuration: https://go.nuxtjs.dev/config-build
  target: "static",
};
