'use client';

import { motion } from 'framer-motion';

const skills = ['C', 'C++', 'Python', 'JavaScript', 'ShellScript', 'SQL', 'Verilog', 'React', 'Next.js', 'Express', 'Node.js', 'FastAPI', 'Pytorch', 'TensorFlow', 'PostgreSQL', 'MongoDB', 'Git', 'Docker'];

export default function SkillsSection() {
	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{skills.map((skill, index) => (
						<motion.div
							key={skill}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
						>
							<h3 className="text-lg font-semibold">{skill}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
