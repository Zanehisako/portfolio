import { addScaleCorrector, motion } from "framer-motion";
export default function Box({ css }: { css: any }) {
	return (
		<motion.div
			style={css}
			className='box '
			whileTap={{ scale: 0.5 }}
			drag={true}
			dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 900 }}
		/>
	);
}
