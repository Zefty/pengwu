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
		<section
			id="home"
			className="h-screen flex flex-col justify-between lg:justify-normal"
		>
			<div className="px-16 2xl:px-64 lg:pt-48 pt-16 lg:pb-36">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]">
					Hi, I&apos;m Jaime Wu. <br /> A Fullstack Software Engineer.
				</h1>
				<p className="mt-8 text-md md:text-lg lg:text-xl font-semibold">
					Waddling through code, one line at a time, in the world of Typescript
					& .NET.
				</p>
			</div>
			<div className="flex px-16 2xl:px-64 text-accent gap-8 flex-wrap lg:gap-16 items-center font-semibold pb-16">
				<ALink href="https://github.com/Zefty" target="_blank">
					<IconBrandGithubFilled className="lg:size-12" />
					Github
				</ALink>
				<ALink href="https://www.linkedin.com/in/jwu153/" target="_blank">
					<IconBrandLinkedinFilled className="lg:size-12" />
					LinkedIn
				</ALink>
				<ALink href="mailto:jaime.wu011@gmail.com" target="_blank">
					<IconMailFilled className="lg:size-12" />
					Email
				</ALink>
				<ALink
					href="#projects"
					className="h-12 w-50 lg:w-60 lg:h-16 lg:text-xl rounded-full flex gap-2 items-center justify-center bg-primary text-primary-foreground flex-row"
				>
					Waddle this way <PenguinFootprint className="size-8 lg:size-12" />
				</ALink>
			</div>
		</section>
	);
}

export function ProjectsSection() {
	return (
		<section
			id="projects"
			className="h-screen flex flex-col pt-12 pb-24 px-16 2xl:px-64 w-full gap-12"
		>
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h1>
			<ProjectsShowcase />
		</section>
	);
}

export function ExperienceSection() {
	return (
		<section
			id="experience"
			className="flex flex-col px-16 2xl:px-64 pt-12 pb-24 justify-center"
		>
			<div className="flex flex-col gap-4 md:gap-8">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
					Experience
				</h1>
				<DownloadResume />
			</div>
			<Timeline />
		</section>
	);
}
