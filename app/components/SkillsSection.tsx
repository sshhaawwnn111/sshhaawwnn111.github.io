'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C', 'C++', 'Python', 'JavaScript', 'ShellScript', 'SQL', 'Verilog'],
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['React', 'Next.js', 'Express', 'Node.js', 'FastAPI', 'Pytorch', 'TensorFlow'],
    },
    {
        title: 'Tools & Technologies',
        skills: ['PostgreSQL', 'MongoDB', 'Git', 'Docker'],
    },
];

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

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                                    >
                                        <span className="text-lg font-medium">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}