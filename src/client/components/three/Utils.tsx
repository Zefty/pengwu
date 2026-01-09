import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function ResponsiveContainer({
	children,
}: {
	children?: React.ReactNode;
}) {
	const { size } = useThree();
	let scale = 0.65;
	let position = [0, -0.25, 0] as [number, number, number];

	if (size.width >= 1920) {
		scale = 1;
		position = [5, 0, 0];
	} else if (size.width >= 1280) {
		scale = 0.85;
		position = [4, 0, 0];
	} else if (size.width >= 1024) {
		scale = 0.75;
		position = [3, 0, 0];
	}
	return (
		<group scale={scale} position={position}>
			{children}
		</group>
	);
}

export function MouseRotatingObject({
	baseRotation = [0, 0, 0],
	position = [0, 0, 0],
	children,
}: {
	baseRotation?: [number, number, number];
	position?: [number, number, number];
	children?: React.ReactNode;
}) {
	const ref = useRef<THREE.Group>(null);

	useFrame((state, delta) => {
		if (!ref.current) return;

		const targetX = baseRotation[0] - state.pointer.y * Math.PI * 0.05;
		const targetY = baseRotation[1] + state.pointer.x * Math.PI * 0.05;
		const targetZ = baseRotation[2] - state.pointer.x * Math.PI * 0.01;

		const smoothing = 1 - Math.exp(-8 * delta);

		ref.current.rotation.y = THREE.MathUtils.lerp(
			ref.current.rotation.y,
			targetY,
			smoothing,
		);

		ref.current.rotation.x = THREE.MathUtils.lerp(
			ref.current.rotation.x,
			targetX,
			smoothing,
		);

		ref.current.rotation.z = THREE.MathUtils.lerp(
			ref.current.rotation.z,
			targetZ,
			smoothing,
		);
	});

	return (
		<group ref={ref} position={position}>
			{children}
		</group>
	);
}

export function ParallaxGroup({
	ref,
	strength = 0.015,
	children,
}: {
	ref: React.RefObject<HTMLDivElement | null>;
	strength?: number;
	children: React.ReactNode;
}) {
	const internalRef = useRef<THREE.Group>(null);

	useFrame(() => {
		if (!ref.current || !internalRef.current) return;
		internalRef.current.position.y = ref.current.scrollTop * strength;
	});

	return <group ref={internalRef}>{children}</group>;
}

export function BobblingObject({
	position = [0, 0, 0],
	amplitude = 0.5,
	frequency = 1.0,
	phase = 0,
	children,
}: {
	position?: [number, number, number];
	amplitude?: number;
	frequency?: number;
	phase?: number;
	children?: React.ReactNode;
}) {
	const ref = useRef<THREE.Group>(null);
	const baseY = position[1];

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (!ref.current) return;

		ref.current.position.y =
			baseY + Math.sin(t * 2 * Math.PI * frequency + phase) * amplitude;
	});

	return (
		<group ref={ref} position={position}>
			{children}
		</group>
	);
}
