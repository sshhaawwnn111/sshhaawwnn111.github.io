'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-12 md:py-20 px-4">
			<div className="max-w-3xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8"
				>
					Let&apos;s Connect
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300 mb-6"
				>
					Have a project in mind? Let&apos;s create something amazing together.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex items-center justify-center gap-2 text-gray-300 mb-8"
				>
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
					</svg>
					<span>Baltimore, MD</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
				>
					<a
						href="mailto:hwang324@jh.edu"
						className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<span>Get in Touch</span>
					</a>
					<a
						href="/My-Portfolio/resume.pdf"
						target="_blank"
						className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
							<path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8z" />
							<path d="M8 7a1 1 0 100 2h4a1 1 0 100-2H8z" />
						</svg>
						<span>View Resume</span>
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex justify-center gap-6"
				>
					<a 
					href="https://github.com/sshhaawwnn111" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</a>
					<a 
					href="https://www.linkedin.com/in/hsuan-wang-312a59265/" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
					{/* <a 
					href="https://twitter.com" 
					target="_blank" 
					rel="noopener noreferrer" 
					className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</a> */}
					<a
					href="https://www.facebook.com/wang.xuan.67205/"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
					>
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
					</svg>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
