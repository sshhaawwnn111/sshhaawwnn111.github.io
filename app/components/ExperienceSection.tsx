'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
    const experiences = [
        {
            id: 1,
            role: 'Research Assistant',
            company: 'JHU CCVL Lab',
            location: 'Johns Hopkins University',
            date: 'Sep 2025 - Present',
            description: 'Conducted research on deep learning models for medical imaging, contributing to publications and open-source projects.',
        },
        {
            id: 2,
            role: 'Software Engineering Intern',
            company: 'Tulane Research Innovation for Arrhythmia Discovery Center',
            location: 'Baltimore, MD',
            date: 'Jun 2025 - Aug 2025',
            description: 'Built an AI-powered medical ECG monitoring platform and collaborated with research teams to deliver innovative healthcare solutions.',
        },
        {
            id: 3,
            role: 'Artificial Intelligence Engineer Intern',
            company: 'Glia Cloud',
            location: 'Taipei, Taiwan',
            date: 'Jul 2023 - Jan 2024',
            description: 'Evaluated emerging AI models and led R&D on text-to-video generation, while streamlining data workflows with automated SQL queries.',
        },
        // Add more experiences as needed
    ];

    return (
        <section className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
                Experience
            </motion.h2>
            <div className="flex flex-col gap-8">
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 rounded-xl p-6 cursor-pointer transition-transform"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <div>
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-gray-300">{exp.company} &mdash; {exp.location}</p>
                            </div>
                            <p className="text-gray-400 md:text-right">{exp.date}</p>
                        </div>
                        <p className="text-gray-200">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}