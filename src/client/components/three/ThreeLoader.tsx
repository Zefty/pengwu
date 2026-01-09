import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { OceanBackground } from "../OceanBackground";
import { Progress } from "../ui/progress";

export function ThreeLoader({ minDuration = 1000 }: { minDuration?: number }) {
	const { progress } = useProgress();
	const [minTimePassed, setMinTimePassed] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setMinTimePassed(true), minDuration);
		return () => clearTimeout(t);
	}, [minDuration]);

	const hidden = progress >= 100 && minTimePassed;

	return (
		<div
			className={cn(
				"absolute inset-0 z-10 flex items-center justify-center transition-all duration-1000 pointer-events-none",
				hidden ? "opacity-0" : "opacity-100",
			)}
		>
			<Progress
				value={progress}
				className="w-1/4 bg-transparent"
				aria-label="loading"
			>
				<h1 id="loading-label" className="text-center w-full font-bold text-xl">
					Loading...
				</h1>
			</Progress>
			<OceanBackground className="-z-10" />
		</div>
	);
}
