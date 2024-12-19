import { MobileToastClient } from "./mobile-toast-client";
import { useTranslation } from "@/app/i18n";

export async function MobileToastServer({ lang }: { lang: string }) {
	const { t } = await useTranslation(lang, "common");

	return <MobileToastClient description={t("mobile_toast_description")} />;
}
