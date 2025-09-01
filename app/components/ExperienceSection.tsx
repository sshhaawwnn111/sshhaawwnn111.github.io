'use client';

export default function ExperienceSection() {
    const experiences = [
        {
            role: 'Software Engineering Intern',
            company: 'Tech Company',
            location: 'Baltimore, MD',
            date: 'Jun 2024 - Aug 2024',
            description: 'Worked on full-stack web development projects, collaborating with cross-functional teams to deliver scalable solutions.',
        },
        {
            role: 'Research Assistant',
            company: 'JHU AI Lab',
            location: 'Johns Hopkins University',
            date: 'Sep 2023 - May 2024',
            description: 'Conducted research on deep learning models for medical imaging, contributing to publications and open-source projects.',
        },
        // Add more experiences as needed
    ];

    return (
        <section className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h2>
            <div className="flex flex-col gap-8">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <div>
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-gray-300">{exp.company} &mdash; {exp.location}</p>
                            </div>
                            <p className="text-gray-400 md:text-right">{exp.date}</p>
                        </div>
                        <p className="text-gray-200">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}