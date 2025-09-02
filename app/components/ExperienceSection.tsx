'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'JHU CCVL Lab',
        position: 'Research Assistant',
        duration: 'Sep 2025 - Present',
        location: 'Baltimore, MD',
        description: 'Conducted research on deep learning models for medical imaging, contributing to publications and open-source projects.',
        technologies: ['Python', 'PyTorch', 'Medical Imaging', 'Git'],
    },
    {
        id: 2,
        company: 'Tulane Research Innovation for Arrhythmia Discovery Center',
        position: 'Software Engineering Intern',
        duration: 'Jun 2025 - Aug 2025',
        location: 'New Orleans, LA',
        description: 'Built an AI-powered medical ECG monitoring platform and collaborated with research teams to deliver innovative healthcare solutions.',
        technologies: ['TypeScript', 'Python', 'React.js', 'FastAPI', 'Git', 'PyTorch', 'Docker', 'PostgreSQL', 'MongoDB'],
    },
    {
        id: 3,
        company: 'Glia Cloud',
        position: 'Artificial Intelligence Intern',
        duration: 'Jul 2023 - Jan 2024',
        location: 'Taipei, Taiwan',
        description: 'Evaluated emerging AI models and led R&D on text-to-video generation, while streamlining data workflows with automated SQL queries.',
        technologies: ['Python', 'Django', 'MySQL', 'Git', 'Diffusion Models', 'Machine Learning', 'Deep Learning'],
    },
];

export default function ExperienceSection() {
    return (
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            >
                Experience
            </motion.h2>

            <div className="space-y-8">
                {experiences.map((experience) => (
                    <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: experience.id * 0.1 }}
                        className="group relative p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-1">{experience.position}</h3>
                                <h4 className="text-lg text-purple-300 mb-2">{experience.company}</h4>
                            </div>
                            <div className="text-sm text-gray-400 md:text-right">
                                {experience.duration}
                                {experience.location && (
                                    <span className="text-gray-500"> - {experience.location}</span>
                                )}
                            </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {experience.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
