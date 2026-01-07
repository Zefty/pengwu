"use client";

import {
	IconBrandGithubFilled,
	IconBrandLinkedinFilled,
	IconMailFilled,
} from "@tabler/icons-react";
import { ALink } from "./ALink";
import { DownloadResume } from "./DownloadResume";
import { PenguinFootprint } from "./icons/PenguinFootprint";
import { ProjectsShowcase } from "./ProjectsShowcase";
import Timeline from "./Timeline";

export function HomeSection() {
	return (
		<section id="home" className="h-screen">
			<div className="px-64 pt-48 pb-36">
				<h1 className="text-5xl font-bold leading-[1.2]">
					Hi, I&apos;m Jaime Wu. <br /> A Fullstack Software Engineer.
				</h1>
				<p className="mt-8 text-xl">
					Waddling through code, one line at a time, in the world of Typescript
					& .NET.
				</p>
			</div>
			<div className="flex px-64 text-accent gap-16 items-center">
				<ALink href="https://github.com/Zefty" target="_blank">
					<IconBrandGithubFilled className="size-12" />
					Github
				</ALink>
				<ALink href="https://www.linkedin.com/in/jwu153/" target="_blank">
					<IconBrandLinkedinFilled className="size-12" />
					LinkedIn
				</ALink>
				<ALink href="mailto:jaime.wu011@gmail.com" target="_blank">
					<IconMailFilled className="size-12" />
					Email
				</ALink>
				<ALink
					href="#projects"
					className="w-60 h-16 text-xl rounded-full flex gap-2 items-center justify-center bg-primary text-primary-foreground flex-row"
				>
					Waddle this way <PenguinFootprint className="size-12" />
				</ALink>
			</div>
		</section>
	);
}

export function ProjectsSection() {
	return (
		<section
			id="projects"
			className="h-screen flex flex-col pt-12 pb-24 px-64 w-full gap-12"
		>
			<h1 className="text-5xl font-bold">Projects</h1>
			<ProjectsShowcase />
		</section>
	);
}

export function ExperienceSection() {
	return (
		<section
			id="experience"
			className="flex flex-col px-64 pt-12 pb-24 justify-center"
		>
			<div className="flex flex-col gap-8">
				<h1 className="text-5xl font-bold">Experience</h1>
				<DownloadResume />
			</div>
			<Timeline />
		</section>
	);
}
