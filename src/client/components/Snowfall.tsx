import { useEffect, useState } from "react";

interface Snowflake {
	id: number;
	x: number;
	size: number;
	duration: number;
	delay: number;
	opacity: number;
}

export function Snowfall() {
	const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

	useEffect(() => {
		const flakes: Snowflake[] = Array.from({ length: 10 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			size: Math.random() * 4 + 2,
			duration: Math.random() * 5 + 5,
			delay: Math.random() * 5,
			opacity: Math.random() * 0.6 + 0.4,
		}));
		setSnowflakes(flakes);
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{snowflakes.map((flake) => (
				<div
					key={flake.id}
					className="absolute rounded-full bg-white animate-fall"
					style={{
						left: `${flake.x}%`,
						width: `${flake.size}px`,
						height: `${flake.size}px`,
						opacity: flake.opacity,
						animationDuration: `${flake.duration}s`,
						animationDelay: `${flake.delay}s`,
					}}
				/>
			))}
		</div>
	);
}
