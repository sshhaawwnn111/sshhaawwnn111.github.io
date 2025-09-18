'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Johns Hopkins Social Cognitive AI (SCAI) Lab',
        position: 'Research Assistant',
        duration: 'Sep 2025 - Present',
        location: 'Baltimore, MD',
        description: '',
        bulletPoints: [
            'Conducting research on Embodied AI with a focus on perspective-taking and social reasoning.',
            'Developing simulation-based world models and state representations for evaluating spatial cognition in AI systems.',
        ],
        technologies: ['Python', 'PyTorch', 'Medical Imaging', 'Git'],
    },
    {
        id: 2,
        company: 'Johns Hopkins Computational Cognition, Vision, and Learning (CCVL) Lab',
        position: 'Software Developer',
        duration: 'Sep 2025 - Present',
        location: 'Baltimore, MD',
        description: 'Developing platform for the BodyMaps project.',
        bulletPoints: [
            
        ],
        technologies: ['Python', 'PyTorch', 'Medical Imaging', 'Git'],
    },
    {
        id: 3,
        company: 'Tulane Research Innovation for Arrhythmia Discovery Center',
        position: 'Software Engineering Intern',
        duration: 'Jun 2025 - Aug 2025',
        location: 'New Orleans, LA',
        description: 'Built an AI-powered ECG monitoring platform (Private Repo) and collaborated with research teams on innovative healthcare solutions.',
        bulletPoints: [
            'Developed comprehensive medical ECG monitoring platform with FastAPI backend, dual database architecture (PostgreSQL/MongoDB), and React TypeScript frontend.',
            'Built secure role-based authentication system using JWT tokens and bcrypt password hashing.',
            'Designed and deployed RESTful APIs using Docker with CI/CD pipelines on private research network.',
            'Created end-to-end MLOps pipeline for ECG inference with PyTorch models, preprocessing pipelines, and CUDA-enabled Docker deployment.',
            'Implemented monitoring stack using Prometheus and Grafana for tracking model performance and system health.'
        ],
        technologies: ['TypeScript', 'Python', 'React.js', 'FastAPI', 'PyTorch', 'Git', 'Docker', 'PostgreSQL', 'MongoDB'],
    },
    {
        id: 4,
        company: 'Glia Cloud',
        position: 'Artificial Intelligence Intern',
        duration: 'Jul 2023 - Jan 2024',
        location: 'Taipei, Taiwan',
        description: 'Evaluated emerging AI models and led R&D on text-to-video generation, while streamlining data workflows with automated SQL queries.',
        bulletPoints: [
            'Evaluated and presented insights on 15+ emerging open sourced AI models (e.g., Neuralangelo, AudioCraft), influencing strategic decisions for future product development.',
            'Led independent R&D on text-to-video generation with AnimateDiff, engineering a custom latent space modification to enable first-frame image conditioning.',
            'Eliminated manual DB tasks by creating automated SQL and Python workflows for data selection and retrieval.'
        ],
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
                                <div>{experience.duration}</div>
                                <div>{experience.location}</div>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {experience.description}
                        </p>
                        
                        {experience.bulletPoints && (
                            <ul className="text-gray-300 mb-4 space-y-2">
                                {experience.bulletPoints.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-2 mt-1">•</span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
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
