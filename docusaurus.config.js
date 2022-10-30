// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
// const duotoneLight = require("prism-react-renderer/themes/duotoneLight");

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: { apiBaseUrl: process.env.API_BASE_URL },
  title: "Guying's Wiki",
  tagline: "あ布鸢尾绽放,一瓣心香,折刃不弃,纸质柔情",
  url: "https://wiki.guyinga.top/",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "Guying",
  projectName: "wiki",

  i18n: {
    defaultLocale: "zh-CN",
    locales: [
      "zh-CN",
      //"en"
    ],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        docs: {
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/guyingd/wiki/tree/main/website",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },
        blog: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
          showReadingTime: true,
          editUrl: "https://github.com/guyingd/wiki/tree/main/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      announcementBar: {
        id: "support_us",
        content:
          "wiki初步完成，但暂未编写机器人相关内容...",
        backgroundColor: "#169b90",
        textColor: "#1fdece",
        isCloseable: true,
      },
      navbar: {
        title: "Guying の Wiki",
        logo: {
          alt: "Guying の Wiki",
          src: "img/favicon/favicon.png",
          srcDark: "img/favicon/favicon.png",
          target: "_self",
          className: "navbarIcon",
        },
        hideOnScroll: false,
        items: [
         
         {
            type: "dropdown",
            label: "QQ机器人",
            position: "left",
            items: 
            [
              { type: "doc", label: "Home", docId: "bot-end" },
              {
                type: "docSidebar",
                label: "海棠",
                sidebarId: "haitang",
              },
            ],
         },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      footer: {
        logo: {
          src: "img/favicon/favicon.png",
          href: "/",
          width: 40,
          height: 40,
          alt: "Guying's",
        },
        style: "light", // "light" | "dark"
        links: [],
        copyright: `2022.10.29 12:10创建.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
        // Prism: https://prismjs.com/#supported-languages
        // Docusaurus Support: https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
        additionalLanguages: [
          "aspnet",
          "cpp",
          "csharp",
          "graphql",
          "go",
          "http",
          "java",
          "powershell",
          "swift",
          "vim",
          "docker",
        ],
      },
      algolia: {
        appId: "8463FRJ7IM",
        apiKey: "cffc54a8e4cee6bf2f02a32cb6737711",
        indexName: "MyBotDoc",
        schedule: 'at 01:00 every 1 day',
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        searchParameters: {},
        searchPagePath: "search",
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
    }),
};

module.exports = config;
