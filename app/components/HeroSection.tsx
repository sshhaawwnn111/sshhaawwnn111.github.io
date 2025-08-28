'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>

			<div className="relative z-10 text-center">
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="flex justify-center mb-6"
				>
				<Image
					src="/profile.png"
					alt="Profile picture"
					width={160}
					height={160}
					className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
					unoptimized
				/>
				</motion.div>
				<motion.h1
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Hsuan Wang
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg md:text-xl text-gray-300 mb-8 px-4"
				>
					Master&apos;s student at Johns Hopkins University, passionate about software engineering, AI, and building impactful digital experiences.
					I&apos;m Hsuan Wang, a Computer Science Master&apos;s student at Johns Hopkins University with experience in AI, software engineering, and full-stack development. I&apos;ve built projects ranging from medical AI systems to scalable web apps, and I enjoy applying machine learning and cloud technologies to solve real-world problems.
				</motion.p>
			</div>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
