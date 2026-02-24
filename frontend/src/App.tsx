import React, { useEffect, useState } from 'react';
import { fetchPortfolioData, PortfolioData } from './services/PortfolioService';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData()
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-deep-space">
        <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="bg-deep-space text-white min-h-screen selection:bg-neon-cyan selection:text-deep-space">
      <Hero
        name={data.name}
        email={data.email}
        phone={data.phone}
        location={data.location}
        github={data.github}
        linkedin={data.linkedin}
        leetcode={data.leetcode}
      />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-32">
        <About content={data.about} education={data.education} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Achievements achievements={data.achievements} />
        <Certifications certifications={data.certifications} />
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {data.name}. Built with Spring Boot & React.
      </footer>
    </div>
  );
};

export default App;
