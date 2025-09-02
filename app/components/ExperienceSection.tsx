'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        company: 'Company Name',
        position: 'Software Engineer',
        duration: 'Jan 2023 - Present',
        description: 'Developed and maintained web applications using React, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
        id: 2,
        company: 'Previous Company',
        position: 'Frontend Developer',
        duration: 'Jun 2022 - Dec 2022',
        description: 'Built responsive user interfaces and improved application performance. Worked closely with designers to implement pixel-perfect designs.',
        technologies: ['Vue.js', 'JavaScript', 'CSS', 'Figma'],
    },
    {
        id: 3,
        company: 'Internship Company',
        position: 'Software Development Intern',
        duration: 'May 2022 - Aug 2022',
        description: 'Assisted in developing internal tools and learning modern development practices. Contributed to code reviews and testing processes.',
        technologies: ['Python', 'Django', 'MySQL', 'Git'],
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