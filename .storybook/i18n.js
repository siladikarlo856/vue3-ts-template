import { createI18n } from "vue-i18n";

import compLibDe from "../src/lang/de/translations.json";
import compLibEn from "../src/lang/en/translations.json";
import compLibHr from "../src/lang/hr/translations.json";
import compLibMk from "../src/lang/mk/translations.json";
import compLibNl from "../src/lang/nl/translations.json";
import compLibSl from "../src/lang/sl/translations.json";
import compLibSr from "../src/lang/sr/translations.json";

const messages = {
  de: compLibDe,
  en: compLibEn,
  hr: compLibHr,
  mk: compLibMk,
  nl: compLibNl,
  sl: compLibSl,
  sr: compLibSr,
};

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages,
});
