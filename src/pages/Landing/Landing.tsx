import React from 'react';
import { motion } from 'framer-motion';
import {
	Navbar,
	Home,
	EncourageSection,
	ChangeTimeSection,
} from '../../components';
import { pageTransition, pageVariants } from '../../utils/constants';

function Landing() {
	sessionStorage.clear();

	return (
		<motion.main
			variants={pageVariants(1)}
			initial="initial"
			animate="in"
			exit="out"
			transition={pageTransition}
		>
			<Navbar />
			<Home />
			<EncourageSection />
			<ChangeTimeSection />
		</motion.main>
	);
}

export default Landing;
