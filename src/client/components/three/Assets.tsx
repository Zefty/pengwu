import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import { MouseRotatingObject } from "./Utils";

export function PudgyPenguin({
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

export function IceBerg({
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
