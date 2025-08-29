'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'HopCrave',
		description: 'Full-stack recipe sharing social media platform for food enthusiasts.',
		image: '/My-Portfolio/code.jpg',
		github: 'https://github.com/sshhaawwnn111/Recipe-Sharing-App',
		learnMore: '#',
	},
	{
		id: 2,
		title: 'PPG2ECG with SEGAN',
		description: 'Deep learning project to reconstruct ECG signals from PPG data using GANs.',
		image: '/My-Portfolio/laptop.jpg',
		github: 'https://github.com/sshhaawwnn111/Reconstructing-ECG-from-Paired-PPG-using-Dual-Discriminator-SEGAN',
		learnMore: '#',
	},
	{
		id: 3,
		title: 'Asymmetry-Aware Stroke Detection',
		description: 'Improve brain CT image stroke region segmentation by leveraging asymmetry analysis and preprocessing techniques.',
		image: '/My-Portfolio/code.jpg',
		github: '#',
		learnMore: '#',
	},
	{
		id: 4,
		title: 'Steam Reviews Sentiment Classification',
		description: 'Built a sentiment analysis pipeline for Steam reviews using BERT and other ML models, achieving over 90% classification accuracy on custom-scraped data.',
		image: '/My-Portfolio/laptop.jpg',
		github: 'https://github.com/sshhaawwnn111/Sentiment-Classification',
		learnMore: '#',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video min-h-[200px] bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" unoptimized />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link href="#" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									View Project
								</Link>
								<Link href={project.github} className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									GitHub
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
