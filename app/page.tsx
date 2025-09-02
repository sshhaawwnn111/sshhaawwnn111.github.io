'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
