import { ExternalLink, Users, User } from "lucide-react";
import projects from "../data/projects.json";
import { useTranslation } from "../i18n";

export default async function Projects({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <section className="border border-[#e5e7eb0f] rounded-lg p-4 sm:p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 sm:mb-8">{t("projects_title")}</h2>

      {/* Legend */}
      <div className="flex gap-4 mb-4">
        <div className="flex items-center">
          <User className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-sm text-gray-300">{t("solo_project")}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-5 h-5 text-purple-400 mr-2" />
          <span className="text-sm text-gray-300">{t("collab_project")}</span>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-3 sm:p-4 shadow-md duration-200 outline outline-1 outline-[#e5e7eb0f]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col sm:flex-row gap-2 mb-3 sm:mb-0">
                <span className="hidden sm:inline-block text-gray-300 mt-1">
                  📁
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">
                    {project.title[lang as "fr" | "en"]}
                  </h3>
                  <p className="text-gray-300">
                    {project.description[lang as "fr" | "en"]}
                  </p>
                  {project.collaboration && (
                    <p className="text-sm text-purple-400">
                      {t("role_project")}: {project.role}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between sm:justify-end gap-2">
                {project.collaboration ? (
                  <Users
                    className="w-5 h-5 text-purple-400"
                    aria-label="Collaboration"
                  />
                ) : (
                  <User
                    className="w-5 h-5 text-green-400"
                    aria-label="Individual Project"
                  />
                )}
                <a
                  href={project.url}
                  className="text-blue-400 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("view_project_button")}{" "}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
