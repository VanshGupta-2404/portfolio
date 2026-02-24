import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../services/PortfolioService';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <section id="projects" className="scroll-mt-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-heading mb-12"
            >
                Featured <span className="text-gradient">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 group relative overflow-hidden flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-neon-cyan transition-all duration-500">
                            <ExternalLink size={40} />
                        </div>

                        <div className="space-y-4 mb-6">
                            <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
                            {project.desc}
                        </p>

                        <div className="flex gap-4">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-white hover:text-neon-cyan transition-colors">
                                    <ExternalLink size={24} />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-electric-purple transition-colors">
                                    <Github size={24} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
