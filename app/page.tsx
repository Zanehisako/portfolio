"use client";
import { addScaleCorrector, motion } from "framer-motion";
import Box from "./componets/box";

export default function Home() {
	const boxstyle1 = {
		width: "200px",
		height: "200px",
		"border-radius": "50%",
		background: "blue",
	};

	const boxstyle2 = {
		width: "200px",
		height: "250px",
		background: "red",
	};
	return (
		<main>
			<Box css={boxstyle1} />
			<Box css={boxstyle2} />
		</main>
	);
}
