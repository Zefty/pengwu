import { useLocation } from "@tanstack/react-router";
import { useRef } from "react";
import { Footer } from "./Footer";
import { OceanBackground } from "./OceanBackground";
import { PengwuCanvas } from "./three/PengwuCanvas";
import { ThreeLoader } from "./three/ThreeLoader";
import { ScrollArea } from "./ui/scroll-area";

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const pathname = useLocation({
		select: (location) => location.pathname,
	});
	const isHomePage = pathname === "/";

	return (
		<>
			<OceanBackground className="-z-10" />
			{isHomePage && <ThreeLoader />}
			<ScrollArea className="h-screen w-screen" ref={containerRef}>
				{isHomePage && <PengwuCanvas containerRef={containerRef} />}
				{children}
				<Footer />
			</ScrollArea>
		</>
	);
}
