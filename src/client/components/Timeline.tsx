import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/client/components/ui/badge";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";

const experiences = [
	{
		title: "Software Engineer",
		company: "Kiwibank",
		period: "2024 - Present",
		description: `In the Developer Experience Hub, I primarily worked on:
        - Scaling adoption of our internal developer portal (Backstage) to 1,000+ engineers.
        - Internal tools such as streamlining CICD pipelines, automations, and infrastructure for deployment efficiency.
        `,
		technologies: [
			"React",
			"Node.js",
			"TypeScript",
			".NET/C#",
			"bash",
			"Postgres",
			"Docker",
			"Kubernetes",
			"AWS",
		],
	},
	{
		title: "Analyst Developer",
		company: "FNZ",
		period: "2023 - 2024",
		description: `FNZ is a global provider of end-to-end wealth management platforms.
		I worked as a full-stack developer across multiple client projects, building responsive web interfaces and highly performant APIs for various finanical platforms.`,
		technologies: [
			".NET/C#",
			"VB.NET",
			"TSQL",
			"ASP Webforms",
			"API Development",
		],
	},
	{
		title: "Data Engineer",
		company: "Quantiful",
		period: "2018 - 2021",
		description: `Quantiful is a SaaS company specialising in AI-powered demand planning software. In my role, I focused on:
		- Developing data engineering and machine learning pipelines across multiple projects.
		- Saving data scientists 8+ hours per week on manual processes and triggers.`,
		technologies: ["Python", "AWS", "IaC", "SQL"],
	},
];

export default function Timeline() {
	return (
		<div className="w-4xl mx-auto py-12 md:py-20 px-6">
			<div className="relative ml-3">
				{/* Timeline line */}
				<div className="absolute left-0 top-4 bottom-0 border-l-2 border-primary" />
				{experiences.map(
					({ company, description, period, technologies, title }) => (
						<div key={company} className="relative pl-8 pb-12 last:pb-0">
							{/* Timeline dot */}
							<div className="absolute size-4 -translate-x-1/2 left-px top-3 rounded-full bg-primary" />

							{/* Content */}
							<div className="space-y-3">
								<div className="flex items-center gap-2.5">
									<div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
										<Building2 className="h-5 w-5 text-muted-foreground" />
									</div>
									<span className="text-xl font-medium">{company}</span>
								</div>
								<TimelineContent
									title={title}
									date={period}
									description={description}
								/>
								<div className="flex flex-wrap gap-2">
									{technologies.map((tech) => (
										<Badge
											key={tech}
											variant="secondary"
											className="rounded-full text-sm p-3"
										>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</div>
					),
				)}
			</div>
		</div>
	);
}

function TimelineContent({
	title,
	date,
	description,
}: {
	title: string;
	date: string;
	description: string;
}) {
	return (
		<Collapsible className="hover:bg-muted/50 data-open:bg-muted/50 rounded-lg p-4 w-full">
			<CollapsibleTrigger className="text-start w-full">
				<h3 className="text-3xl font-semibold tracking-[-0.01em] text-start">
					{title}
				</h3>
				<div className="flex items-center gap-2 mt-2 text-md">
					<Calendar className="h-4 w-4" />
					<span>{date}</span>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="font-normal pt-6 text-lg text-primary/95 text-pretty whitespace-pre-line">
				{description}
			</CollapsibleContent>
		</Collapsible>
	);
}
