import { IconExternalLink } from "@tabler/icons-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { ALink } from "./ALink";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	useCarousel,
} from "./ui/carousel";

const projects = [
	{
		title: "gettinghired",
		description:
			"An inbox-powered job application tracker for helping you get hired!",
		technologies: [
			"Next.js",
			"Typescript",
			"Shadcn",
			"TailwindCss",
			"Drizzle",
			"Trpc",
			"Postgres",
		],
		link: "https://gettinghired.vercel.app/",
		source: "https://gettinghired.vercel.app/",
		img: "/gettinghired.png",
	},
	{
		title: "pengwu",
		description: "My personal portfolio website, the one you're looking at!",
		technologies: ["Next.js", "Three.js", "Shadcn", "TailwindCss"],
		link: "https://pengwu.vercel.app/",
		source: "https://github.com/Zefty/pengwu",
		img: "/pengwu.png",
	},
	{
		title: "bpdiary",
		description:
			"This is a simple and user-friendly hobby project designed to help you keep tabs on your blood pressure without hassle.",
		technologies: [
			"Next.js",
			"Typescript",
			"Shadcn",
			"TailwindCss",
			"Drizzle",
			"Trpc",
			"Postgres",
		],
		link: "https://bpdiary.vercel.app/",
		source: "https://github.com/Zefty/bpdiary",
		img: "/bpdiary.png",
	},
	{
		title: "dev-notes",
		description:
			"Take quick, powerful dev notes — right from your VS Code sidebar.",
		technologies: ["Typescript"],
		link: "https://github.com/Zefty/dev-notes",
		source: "https://github.com/Zefty/dev-notes",
		img: "/devnotes.svg",
	},
];

export function ProjectsShowcase() {
	return (
		<Carousel
			plugins={[
				AutoScroll({
					stopOnInteraction: false,
					speed: 0.5,
				}),
			]}
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent>
				{projects.map((project) => (
					<CarouselItem
						key={project.title}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-2 h-full">
							<Card className="bg-transparent py-0 h-128">
								<CardContent className="flex flex-col aspect-square px-0 h-full">
									<Image
										width={600}
										height={600}
										src={project.img}
										alt={project.img}
										className="bg-muted/50 aspect-video w-full object-cover object-left dark:brightness-[0.85]"
									/>
									<div className="flex flex-col p-6 gap-4 h-full">
										<div className="flex gap-1">
											<ALink
												className="flex-row gap-1 text-2xl font-bold"
												href={project.link}
												target="_blank"
											>
												{project.title}
												<IconExternalLink className="self-start size-4" />
											</ALink>
										</div>
										<p className="font-semibold">{project.description}</p>
										<div className="mt-auto flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="rounded-full md:text-sm p-3"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselControls />
		</Carousel>
	);
}

function CarouselControls() {
	const { api } = useCarousel();
	const [autoscroll, setAutoscroll] = useState(false);
	const autoScroll = api?.plugins()?.autoScroll;

	useEffect(() => {
		if (!autoScroll) return;
		setAutoscroll(autoScroll.isPlaying());
	}, [autoScroll]);

	if (!autoScroll) return;

	const autoscrollHandler = () => {
		if (autoScroll.isPlaying()) {
			autoScroll.stop();
			setAutoscroll(false);
		} else {
			autoScroll.play();
			setAutoscroll(true);
		}
	};
	return (
		<>
			<CarouselPrevious
				disabled={autoscroll}
				overrideDefaultPosition
				size="icon-lg"
				className="translate-y-1/2"
			/>
			<CarouselNext
				disabled={autoscroll}
				overrideDefaultPosition
				size="icon-lg"
				className="translate-x-[125%] translate-y-1/2"
			/>
			<CarouselAutoscroll
				size="lg"
				className="translate-x-[175%] translate-y-1/2"
				autoscroll={autoscroll}
				setAutoscroll={autoscrollHandler}
			/>
		</>
	);
}

function CarouselAutoscroll({
	className,
	autoscroll,
	setAutoscroll,
	variant = "outline",
	size = "default",
	...props
}: React.ComponentProps<typeof Button> & {
	autoscroll: boolean;
	setAutoscroll: () => void;
}) {
	return (
		<Button
			data-slot="carousel-autoscroll"
			variant={variant}
			size={size}
			className={cn("w-20 rounded-full absolute touch-manipulation", className)}
			onClick={setAutoscroll}
			{...props}
		>
			{autoscroll ? "Stop" : "Start"}
			<span className="sr-only">Autoscroll</span>
		</Button>
	);
}
