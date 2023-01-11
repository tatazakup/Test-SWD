import i18next from "i18next";
import common_th from "./translations/th/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "th",
  resources: {
    th: {
      common: common_th,
    },
    en: {
      common: common_en,
    },
  },
});
