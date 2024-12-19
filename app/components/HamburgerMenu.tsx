"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const socialLinks = [
	{
		href: "https://github.com/louisemilevromet",
		Icon: Github,
		label: "GitHub",
	},
	{
		href: "https://www.linkedin.com/in/louis-%C3%A9mile-vromet-5575a0267/",
		Icon: Linkedin,
		label: "LinkedIn",
	},
	{ href: "mailto:louisemilevromet@gmail.com", Icon: Mail, label: "Email" },
];

export const HamburgerMenu = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 640 && open) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [open]);

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild className="sm:hidden">
				<button
					onClick={() => setOpen(!open)}
					aria-label="Social Links"
					className="p-2 mb-4 focus:outline-none"
				>
					{open ? (
						<X className="w-6 h-6 text-gray-400" />
					) : (
						<Menu className="w-6 h-6 text-gray-400" />
					)}
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{socialLinks.map(({ href, Icon, label }) => (
					<DropdownMenuItem key={href} asChild>
						<a href={href} className="flex items-center space-x-2">
							<Icon className="w-4 h-4" />
							<span>{label}</span>
						</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
