import {
	ExperienceSection,
	HomeSection,
	ProjectsSection,
} from "./client/components/Sections";

export default function Home() {
	return (
		<main>
			<HomeSection />
			<ProjectsSection />
			<ExperienceSection />
		</main>
	);
}
