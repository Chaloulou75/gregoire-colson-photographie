import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: ["@nuxt/fonts", "@nuxtjs/seo"],

    site: {
        url: "https://gregoirecolson.com",
        name: "Grégoire Colson — Photographe",
        description:
            "Reportage, street photo et portrait par Grégoire Colson, photographe formé aux Gobelins.",
        defaultLocale: "fr",
    },

    schemaOrg: {
        identity: {
            type: "Person",
            name: "Grégoire Colson",
            url: "https://gregoirecolson.com",
            jobTitle: "Photographe",
        },
    },

    routeRules: {
        "/**": { prerender: true },
    },

    fonts: {
        families: [{ name: "Montserrat", weights: [300, 400, 500, 600, 700] }],
    },

    app: {
        htmlAttrs: { lang: "fr" },
        head: {
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
        },
    },

    css: ["~/assets/css/main.css"],

    vite: {
        plugins: [tailwindcss()],
    },
});
