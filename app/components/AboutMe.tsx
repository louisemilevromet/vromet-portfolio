import { useTranslation } from "../i18n";

export default async function AboutMe({ lang }: { lang: string }) {
	const { t } = await useTranslation(lang, "common");

	return (
		<section className="border border-[#e5e7eb0f] rounded-lg p-6 shadow-lg">
			<h2 className="text-2xl font-bold mb-4">{t("about_me_title")}</h2>
			<p className="text-gray-300 mb-4">{t("about_me_description")}</p>
			<div className="flex flex-col gap-4">
				<div className="flex items-center">
					<span className="text-xl mr-2">{t("location_label")}</span>
					<span>{t("location_value")}</span>
				</div>
				<div className="flex items-center">
					<span className="text-xl mr-2">{t("interests_label")}</span>
					<span>{t("interests_value")}</span>
				</div>
			</div>
			<p className="text-gray-300 mt-4">{t("interest_description")}</p>
		</section>
	);
}
