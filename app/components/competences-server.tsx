import { CompetencesClient } from "@/app/components/competences-client";
import technologies from "@/app/data/technologies.json";
import { useTranslation } from "@/app/i18n";

export async function CompetencesServer({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  const translations = {
    "sections.languages": t("sections.languages"),
    "sections.frameworks": t("sections.frameworks"),
    "sections.libraries": t("sections.libraries"),
    "sections.databases": t("sections.databases"),
    "sections.cms": t("sections.cms"),
    "sections.tools": t("sections.tools"),
  };

  return (
    <section className="border border-[#e5e7eb0f] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{t("competences_title")}</h2>
      <CompetencesClient
        technologies={technologies}
        translations={translations}
      />
    </section>
  );
}
