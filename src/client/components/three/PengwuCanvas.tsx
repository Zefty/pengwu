import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { BobblingObject, ParallaxGroup, ResponsiveContainer } from "./Utils";

const PudgyPenguin = lazy(() =>
	import("./Assets").then((m) => ({ default: m.PudgyPenguin })),
);

const IceBerg = lazy(() =>
	import("./Assets").then((m) => ({ default: m.IceBerg })),
);

export function PengwuCanvas({
	containerRef,
}: {
	containerRef: React.RefObject<HTMLDivElement | null>;
}) {
	return (
		<main className="-z-10 inset-0 absolute">
			<Canvas
				onCreated={(state) => {
					if (state.events.connect) {
						state.events.connect(containerRef.current);
					}
				}}
				camera={{ position: [0, 5, 10], fov: 50 }}
			>
				<Suspense fallback={null}>
					<Environment preset="sunset" />
					<ResponsiveContainer>
						<ParallaxGroup ref={containerRef}>
							<BobblingObject amplitude={0.1} frequency={0.2} phase={0}>
								<IceBerg
									baseRotation={[0, (45 * Math.PI) / 180, (15 * Math.PI) / 180]}
								/>
								<PudgyPenguin position={[0.5, 2.5, 0.5]} />
							</BobblingObject>
						</ParallaxGroup>
					</ResponsiveContainer>
				</Suspense>
			</Canvas>
		</main>
	);
}
