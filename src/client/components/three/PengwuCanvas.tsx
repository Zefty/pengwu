import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type * as THREE from "three";
import { BobblingObject, MouseRotatingObject, ParallaxGroup } from "./Utils";

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
					<ParallaxGroup ref={containerRef}>
						<BobblingObject
							amplitude={0.1}
							frequency={0.2}
							phase={0}
							position={[5, 0, 0]}
						>
							<IceBerg
								baseRotation={[0, (45 * Math.PI) / 180, (15 * Math.PI) / 180]}
							/>
							<PudgyPenguin position={[0.5, 2.5, 0.5]} />
						</BobblingObject>
					</ParallaxGroup>
				</Suspense>
			</Canvas>
		</main>
	);
}

function PudgyPenguin({
	position = [0, 0, 0],
}: {
	position?: [number, number, number];
}) {
	const gltf = useGLTF("/pengwu/pengwu.gltf");

	return (
		<group position={position}>
			<MouseRotatingObject
				baseRotation={[
					(20 * Math.PI) / 180,
					(-45 * Math.PI) / 180,
					(10 * Math.PI) / 180,
				]}
			>
				<primitive object={gltf.scene} scale={0.7} />
			</MouseRotatingObject>
		</group>
	);
}

function IceBerg({
	baseRotation = [0, 0, 0],
}: {
	baseRotation?: [number, number, number];
}) {
	const ref = useRef<THREE.Group>(null);
	const gltf = useGLTF("/iceberg/iceberg.gltf");

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x = baseRotation[0];
			ref.current.rotation.y = baseRotation[1];
			ref.current.rotation.z = baseRotation[2];
		}
	});

	return (
		<group ref={ref}>
			<primitive object={gltf.scene} scale={0.2} />
		</group>
	);
}
