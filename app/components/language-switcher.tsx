"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { languages } from "../i18n/settings";

export default function LanguageSwitcher({ lang }: { lang: string }) {
	const pathName = usePathname();
	const router = useRouter();
	const [currentLang, setCurrentLang] = useState(lang);

	useEffect(() => {
		setCurrentLang(lang);
	}, [lang]);

	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	const handleLanguageChange = (newLang: string) => {
		setCurrentLang(newLang);
		router.push(redirectedPathName(newLang));
	};

	return (
		<Select value={currentLang} onValueChange={handleLanguageChange}>
			<SelectTrigger className="w-16 rounded-full">
				<SelectValue placeholder="Select language" />
			</SelectTrigger>
			<SelectContent className="border-none cursor-pointer">
				{languages.map((locale) => (
					<SelectItem key={locale} value={locale}>
						{locale.toUpperCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
