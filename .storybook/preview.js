// import "../src/stories/assets/flexboxgrid.min.css";
// import "../src/stories/assets/styles.css";
// import "../src/stories/assets/dpm3.css";
// import "../src/stories/assets/pidpm3.css";
// import "../src/stories/assets/fonts.css";

// import "@fortawesome/fontawesome-free/js/brands.js";
// import "@fortawesome/fontawesome-free/js/solid.js";
// import "@fortawesome/fontawesome-free/js/fontawesome.js";

// import "@mdi/font/css/materialdesignicons.min.css";

import { app } from "@storybook/vue3";
import i18n from "./i18n.js";

app.use(i18n);

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  customViewPort1: {
    name: "1366x768",
    styles: {
      width: "1366px",
      height: "769px",
    },
  },
  customViewPort2: {
    name: "1440x900",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
  customViewPort3: {
    name: "1536x864",
    styles: {
      width: "1536px",
      height: "864px",
    },
  },
  customViewPort4: {
    name: "1920x1080",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  layout: "fullscreen",
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "en", title: "English" },
        { value: "hr", right: "hr", title: "Hrvatski" },
        { value: "mk", right: "mk", title: "Makedonski" },
        { value: "nl", right: "nl", title: "Nizozemski" },
        { value: "sl", right: "sl", title: "Slovenski" },
        { value: "sr", right: "sr", title: "Srpski" },
      ],
    },
  },
};
