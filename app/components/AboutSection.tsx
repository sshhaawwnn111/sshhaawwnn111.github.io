'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const interests = [
    '🧠 AI Research', '💻 Full-Stack Dev', '☁️ Cloud Computing', '🏥 Medical AI'
];

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
                About Me
            </motion.h2>

            {/* Tab Navigation */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-8"
            >
                <div className="flex bg-white/5 rounded-full p-1">
                    {['about', 'interests'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                                activeTab === tab 
                                    ? 'bg-purple-500 text-white shadow-lg' 
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-white/10"
            >
                {activeTab === 'about' && (
                    <div>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            I&apos;m Hsuan Wang, a Computer Science Master&apos;s student at Johns Hopkins University with experience in AI, software engineering, and full-stack development. I&apos;ve built projects ranging from medical AI systems to scalable web apps, and I enjoy applying machine learning and cloud technologies to solve real-world problems.
                        </p>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            Currently working on deep learning research at the CCVL Lab, where I focus on medical imaging applications. I&apos;m passionate about bridging the gap between cutting-edge AI research and practical, deployable solutions.
                        </p>
                    </div>
                )}

                {activeTab === 'interests' && (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-purple-300">What I&apos;m Passionate About</h3>
                        <div className="space-y-4 max-w-md mx-auto">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={interest}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                                >
                                    <span className="text-2xl">{interest.split(' ')[0]}</span>
                                    <span className="text-gray-300">{interest.split(' ').slice(1).join(' ')}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </section>
    );
}