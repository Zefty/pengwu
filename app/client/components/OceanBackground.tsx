import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export function OceanBackground({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;
		let time = 0;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		// Wave parameters with randomness
		const waves = [
			{
				amplitude: 25,
				frequency: 0.01,
				speed: 0.005,
				phase: Math.PI,
			},
			// {
			// 	amplitude: 30,
			// 	frequency: 0.003,
			// 	speed: 0.015,
			// 	phase: Math.random() * Math.PI * 2,
			// },
			// {
			// 	amplitude: 40,
			// 	frequency: 0.0015,
			// 	speed: 0.025,
			// 	phase: Math.random() * Math.PI * 2,
			// },
			// {
			// 	amplitude: 25,
			// 	frequency: 0.004,
			// 	speed: 0.01,
			// 	phase: Math.random() * Math.PI * 2,
			// },
			// {
			// 	amplitude: 35,
			// 	frequency: 0.0025,
			// 	speed: 0.018,
			// 	phase: Math.random() * Math.PI * 2,
			// },
		];

		const animate = () => {
			const { width, height } = canvas;

			// Create base gradient
			const gradient = ctx.createLinearGradient(0, 0, 0, height);
			gradient.addColorStop(0, "#33374E");
			gradient.addColorStop(0.5, "#424866");
			gradient.addColorStop(1, "#5E6A8D");

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);

			// Draw multiple wave layers
			waves.forEach((wave, index) => {
				const yOffset = (height / (waves.length + 1)) * (index + 1);
				const alpha = 0.15 + index * 0.05;

				ctx.beginPath();
				ctx.moveTo(0, height);

				for (let x = 0; x <= width; x += 3) {
					// Combine multiple sine waves for organic feel
					const y =
						yOffset +
						Math.sin(x * wave.frequency + time * wave.speed + wave.phase) *
							wave.amplitude +
						Math.sin(
							x * wave.frequency * 1.5 +
								time * wave.speed * 0.7 +
								wave.phase * 2,
						) *
							(wave.amplitude * 0.5) +
						Math.sin(
							x * wave.frequency * 0.5 +
								time * wave.speed * 1.3 +
								wave.phase * 0.5,
						) *
							(wave.amplitude * 0.3);

					ctx.lineTo(x, y);
				}

				ctx.lineTo(width, height);
				ctx.closePath();

				// Create gradient for each wave layer
				const waveGradient = ctx.createLinearGradient(
					0,
					yOffset - wave.amplitude,
					0,
					height,
				);
				waveGradient.addColorStop(0, `rgba(94, 106, 141, ${alpha})`);
				waveGradient.addColorStop(0.5, `rgba(66, 72, 102, ${alpha * 1.2})`);
				waveGradient.addColorStop(1, `rgba(51, 55, 78, ${alpha * 0.8})`);

				ctx.fillStyle = waveGradient;
				ctx.fill();
			});

			// Add subtle foam/sparkle effect
			for (let i = 0; i < 30; i++) {
				const sparkleX = (Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5) * width;
				const sparkleY = (Math.cos(time * 0.3 + i * 0.7) * 0.5 + 0.5) * height;
				const sparkleSize = Math.sin(time + i) * 1.5 + 2;

				ctx.beginPath();
				ctx.arc(sparkleX, sparkleY, sparkleSize, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${0.02 + Math.sin(time * 2 + i) * 0.02})`;
				ctx.fill();
			}

			time += 1;
			animationId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={cn("absolute inset-0 w-screen h-screen", className)}
			style={{ background: "linear-gradient(to bottom, #33374E, #5E6A8D)" }}
		/>
	);
}
