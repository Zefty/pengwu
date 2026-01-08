import {
	IconBrandGithubFilled,
	IconBrandLinkedinFilled,
	IconMailFilled,
} from "@tabler/icons-react";
import { ALink } from "./ALink";

export function Footer() {
	return (
		<footer className="h-70 flex flex-wrap justify-between px-16 2xl:px-64 py-12 ">
			<div className="flex flex-col h-full justify-between">
				<span className="font-semibold text-xl underline decoration-2 underline-offset-6">
					{`© ${new Date().getFullYear()}, Built by Jaime Wu.`}
				</span>
				<div className="flex gap-6">
					<ALink
						href="https://github.com/Zefty"
						target="_blank"
						className="transition-colors duration-350 ease-out hover:text-muted"
					>
						<IconBrandGithubFilled className="size-12" />
					</ALink>
					<ALink
						href="https://www.linkedin.com/in/jwu153/"
						target="_blank"
						className="transition-colors duration-350 ease-out hover:text-muted"
					>
						<IconBrandLinkedinFilled className="size-12" />
					</ALink>
					<ALink
						href="mailto:jaime.wu011@gmail.com"
						target="_blank"
						className="transition-colors duration-350 ease-out hover:text-muted"
					>
						<IconMailFilled className="size-12" />
					</ALink>
				</div>
			</div>
			<div className="flex flex-col h-full justify-between text-end w-30">
				<span className="font-semibold text-xl">This Site.</span>
				<div className="flex flex-col gap-2 underline decoration-2 underline-offset-6">
					<a
						href="#home"
						className="transition-colors duration-350 ease-out hover:text-primary-foreground hover:font-bold"
					>
						Home
					</a>
					<a
						href="#projects"
						className="transition-colors duration-350 ease-out hover:text-primary-foreground hover:font-bold"
					>
						Projects
					</a>
					<a
						href="#experience"
						className="transition-colors duration-350 ease-out hover:text-primary-foreground hover:font-bold"
					>
						Experience
					</a>
					<a
						target="_blank"
						rel="noopener"
						href="https://github.com/Zefty/pengwu"
						className="transition-colors duration-350 ease-out hover:text-primary-foreground hover:font-bold"
					>
						Source Code
					</a>
				</div>
			</div>
		</footer>
	);
}
