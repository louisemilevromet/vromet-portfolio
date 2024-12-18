import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import { CompetencesServer } from "../components/competences-server";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LanguageSwitcher from "../components/language-switcher";
import { useTranslation } from "../i18n";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const lookingForJob = true;
  const { t } = await useTranslation(lang, "common");

  const pulseRGB = lookingForJob ? "46, 204, 113" : "231, 76, 60";

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden py-16 px-4"
      style={
        {
          "--pulse-rgb": pulseRGB,
        } as React.CSSProperties
      }
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-[0.05]"
        autoPlay
        muted
        loop
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-row items-center justify-between mb-16 ">
          <div className="flex items-center mb-4 sm:mb-0 gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="cursor-pointer">
                  <span className="rounded-full pulse">
                    <Image
                      src="/LouisEmileVromet.png"
                      alt="Profile"
                      width={80}
                      height={80}
                      className="rounded-full mr-4"
                    />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t(`looking_for_opportunities_title.${lookingForJob}`)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div>
              <h1 className="text-2xl font-bold">{t("name")}</h1>
              <p className="text-gray-400">{t("title")}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/louisemilevromet" aria-label="GitHub">
              <Github className="w-6 h-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/louis-%C3%A9mile-vromet-5575a0267/"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:louisemilevromet@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-400 hover:text-white " />
            </a>
          </div>
        </header>

        <div className="space-y-16">
          <AboutMe lang={lang} />
          <CompetencesServer lang={lang} />
          <Projects lang={lang} />
          <Experience />
        </div>

        <footer className="text-center text-gray-400 mt-16">
          <p>
            © {new Date().getFullYear()} Louis-Émile Vromet. All rights
            reserved.
          </p>
        </footer>
      </div>

      <div className="fixed bottom-10 right-10 z-50">
        <LanguageSwitcher lang={lang} />
      </div>
    </main>
  );
}
