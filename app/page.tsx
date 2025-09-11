'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalModernPortfolio() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <div id="hero">
                <HeroSection />
            </div>
            <div id="about">
                <AboutSection />
            </div>
            <div id="experience">
                <ExperienceSection />
            </div>
            <div id="projects">
                <ProjectsSection />
            </div>
            <div id="skills">
                <SkillsSection />
            </div>
            <div id="contact">
                <ContactSection />
            </div>
        </div>
    );
}
