"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Technology {
  name: string;
  path: string;
}

interface TechnologiesData {
  [category: string]: Technology[];
}

export function CompetencesClient({
  technologies,
  translations,
}: {
  technologies: TechnologiesData;
  translations: { [key: string]: string };
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      {Object.entries(technologies).map(([category, techs]) => (
        <div
          key={category}
          className="border-b border-gray-800 last:border-b-0"
        >
          <button
            onClick={() => toggleSection(category)}
            className="flex justify-between items-center w-full py-2 text-left rounded transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-200">
              {translations[category]}
            </h3>
            {openSection === category ? (
              <ChevronUp className="text-gray-200" />
            ) : (
              <ChevronDown className="text-gray-200" />
            )}
          </button>
          {openSection === category && (
            <div className="flex flex-wrap gap-6 py-4">
              {techs.map((tech, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center">
                      <Image
                        src={tech.path}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
