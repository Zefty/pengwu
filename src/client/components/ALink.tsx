import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children?: ReactNode;
	target?: "_self" | "_blank" | "_parent" | "_top";
	className?: string;
}

export function ALink({
	href,
	children,
	target = "_self",
	className,
	...props
}: LinkProps) {
	return (
		<a
			href={href}
			target={target}
			rel={target === "_blank" ? "noopener noreferrer" : undefined}
			className={cn("text-primary flex flex-col gap-2 items-center", className)}
			{...props}
		>
			{children}
		</a>
	);
}
