export const fallbackLng = "en";
export const languages = ["en", "fr"];
export const defaultNS = "common";

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    debug: true,
  };
}
