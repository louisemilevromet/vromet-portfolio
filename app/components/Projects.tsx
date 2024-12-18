import { Folder, ExternalLink, Users, User } from "lucide-react";
import projects from "../data/projects.json";
import { useTranslation } from "../i18n";

export default async function Projects({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, "common");

  return (
    <section className="border border-[#e5e7eb0f] rounded-lg p-6 shadow-lg ">
      <h2 className="text-3xl font-bold mb-8">{t("projects_title")}</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-md duration-200 outline outline-1 outline-[#e5e7eb0f]"
          >
            <div className="flex items-center mb-2">
              <Folder className="w-6 h-6 mr-3 text-gray-300" />
              <h3 className="text-xl font-semibold flex-grow">
                {project.title[lang as "fr" | "en"]}
              </h3>
              {project.collaboration ? (
                <Users
                  className="w-5 h-5 text-purple-400 mr-2"
                  aria-label="Collaboration"
                />
              ) : (
                <User
                  className="w-5 h-5 text-green-400 mr-2"
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
            <p className="text-gray-300 mb-2 ml-9">
              {project.description[lang as "fr" | "en"]}
            </p>
            {project.collaboration && (
              <p className="text-sm text-purple-400 ml-9">{project.role}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
