"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function MobileToastClient({ description }: { description: string }) {
	const { toast } = useToast();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640);
		};

		checkMobile();

		if (isMobile) {
			toast({
				title: "Mobile",
				description: description,
				duration: 4500,
			});
		}

		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, [isMobile, toast]);

	return null;
}
