// src/components/Projects.jsx
import React, { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';

const Projects = () => {
    const { t } = useTranslation();
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 'earring',
            number: '01',
            title: 'NOIRMOON PIERCING',
            category: 'BRANDING + WEBSITE',
            description: 'THE FACULTY TO CERTIFY AND GUARANTEE THE QUALITY OF CANNABIS DERIVATIVES WITH A HIGH LEVEL OF CONFIDENCE. A NEW BRAND, AND NEW SERVICE IN ARGENTINA.',
            hoverImage: 'https://via.placeholder.com/350x250/3eeabf/ffffff?text=Hemp+Lab+Preview'
        },
        {
            id: 'ADHD digital intervention',
            number: '02',
            title: 'Tools for ADHD TEENS',
            category: 'UX/UI + RESEARCH',
            description: 'MORE THAN COURSES. TECHNOLOGY\'S FRIENDS CLUB, AN EDUCATIONAL PLATFORM FOR DIGITAL SKILLS DEVELOPMENT.',
            hoverImage: 'https://via.placeholder.com/350x250/C7FF3E/000000?text=Argentec+Preview'
        },
        {
            id: 'Classical website',
            number: '03',
            title: 'Animal of Polis',
            category: 'UX/UI + WEBSITE',
            description: 'COMPREHENSIVE DESIGN SYSTEM FOR ENTERPRISE APPLICATION. BUILDING CONSISTENT USER EXPERIENCES ACROSS MULTIPLE PLATFORMS.',
            hoverImage: 'https://via.placeholder.com/350x250/FF1493/ffffff?text=Design+System'
        },
        {
            id: 'hemp-lab',
            number: '01',
            title: 'Hemp lab',
            category: 'BRANDING + WEBSITE',
            description: 'THE FACULTY TO CERTIFY AND GUARANTEE THE QUALITY OF CANNABIS DERIVATIVES WITH A HIGH LEVEL OF CONFIDENCE. A NEW BRAND, AND NEW SERVICE IN ARGENTINA.',
            hoverImage: 'https://via.placeholder.com/350x250/3eeabf/ffffff?text=Hemp+Lab+Preview'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section__title section__title--neon">{t('projects.title')}</h2>
                <div className="neon-divider neon-divider--long"></div>

                <div className="projects__vertical-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project Number */}
                            <div className="project-card__number">
                                {project.number}
                            </div>

                            {/* Project Category Tag */}
                            <div className="project-card__category">
                                {project.category}
                            </div>

                            {/* Project Content */}
                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover Image */}
                            <div className={`project-card__image ${hoveredProject === project.id ? 'project-card__image--visible' : ''
                                }`}>
                                <img
                                    src={project.hoverImage}
                                    alt={`${project.title} preview`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
