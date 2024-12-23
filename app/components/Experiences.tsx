import { useTranslation } from "../i18n";
import experiences from "../data/experiences.json";
import { ExternalLink } from "lucide-react";
import { MobileToastServer } from "./mobile-toast-server";

export default async function Experiences({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <section className="border border-[#e5e7eb0f] rounded-[0.5rem] p-4 sm:p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 sm:mb-8">
        {t("experience_title")}
      </h2>
      <div className="space-y-4">
        {experiences.experiences.map((experience, index) => (
          <div
            key={index}
            className="rounded-[0.5rem] p-3 sm:p-4 shadow-md duration-200 outline outline-1 outline-[#e5e7eb0f]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col sm:flex-row gap-2 mb-3 sm:mb-0">
                <span className="hidden sm:inline-block text-gray-300 mt-1">
                  💼
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    {experience.position[lang as "fr" | "en"]}
                  </h3>
                  <div
                    className={
                      experience.url
                        ? "text-blue-400 hover:underline cursor-pointer flex w-fit"
                        : "text-gray-300 w-fit"
                    }
                  >
                    {typeof experience.company === "object"
                      ? experience.company[lang as "fr" | "en"]
                      : experience.company}
                    {experience.url && (
                      <a
                        href={experience.url}
                        className="inline-flex items-center ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 flex items-center">
                    📍 {experience.location[lang as "fr" | "en"]}
                  </p>
                  <div className="hidden sm:block list-disc list-inside text-gray-300 space-y-1">
                    {experience.responsibilities[lang as "fr" | "en"].map(
                      (responsibility: string, idx: number) => (
                        <p key={idx}>{responsibility}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between sm:justify-end gap-2 whitespace-nowrap">
                <span className="text-sm text-gray-400 flex items-center">
                  🗓️ {experience.startDate[lang as "fr" | "en"]} -{" "}
                  {experience.endDate[lang as "fr" | "en"] || "Present"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MobileToastServer lang={lang} />
    </section>
  );
}
