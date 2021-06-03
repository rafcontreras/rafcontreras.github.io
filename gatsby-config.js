const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const { theme } = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: "Rafael Contreras",
    author: "Rafael Contreras",
    description: "Rafael Contreras - Senior Full-Stack Developer / UX Designer"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rafael Contreras",
        short_name: "Raf",
        start_url: "/",
        background_color: theme.colors.white,
        icon: "static/icon.svg"
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    }
  ]
};
