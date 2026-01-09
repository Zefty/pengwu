import { IconDownload } from "@tabler/icons-react";

export function DownloadResume() {
	return (
		<a
			className="w-40 h-10 text-xs md:text-base md:w-48 md:h-12 rounded-full flex justify-center items-center gap-2 bg-primary text-primary-foreground"
			href="Jaime_Wu_CV.pdf"
			download="Jaime_Wu_CV.pdf"
		>
			<IconDownload className="size-4 stroke-3" />
			Download Resume
		</a>
	);
}
