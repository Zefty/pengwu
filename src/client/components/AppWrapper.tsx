import { useLocation } from "@tanstack/react-router";
import { Activity, lazy, Suspense, useRef } from "react";
import { Footer } from "./Footer";
import { OceanBackground } from "./OceanBackground";
import { ThreeLoader } from "./three/ThreeLoader";
import { ScrollArea } from "./ui/scroll-area";

const PengwuCanvas = lazy(() =>
	import("./three/PengwuCanvas").then((m) => ({ default: m.PengwuCanvas })),
);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const pathname = useLocation({
		select: (location) => location.pathname,
	});
	const isHomePage = pathname === "/";

	return (
		<>
			<OceanBackground className="-z-10" />
			<Activity mode={isHomePage ? "visible" : "hidden"}>
				<ThreeLoader />
			</Activity>
			<ScrollArea className="h-screen w-screen" ref={containerRef}>
				<Activity mode={isHomePage ? "visible" : "hidden"}>
					<Suspense fallback={null}>
						<PengwuCanvas containerRef={containerRef} />
					</Suspense>
				</Activity>
				{children}
				<Footer />
			</ScrollArea>
		</>
	);
}
