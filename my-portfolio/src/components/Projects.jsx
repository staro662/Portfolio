// src/components/Projects.jsx
import React, { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';
import StackedGenderMap from '../image/STACKEDGENDER-MAP.png';

const Projects = () => {
    const { t } = useTranslation();
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
       
          {
            id: 'pantheon-1-0',
            number: '01',
            title: 'PANTHEON 1.0',
            category: 'DATA VIZ + TABLEAU',
            description: 'A DASHBOARD EXPLORE: GENDER, DOMAIN, LANGUAGE, AND GEOGRAPHIC PATTERNS IN RENOWNED INDIVIDUALS.',
            hoverImage: StackedGenderMap,
            externalUrl: '/pantheon.html'
        },
        {
            id: 'ADHD digital intervention',
            number: '02',
            title: 'Tools for ADHD',
            category: 'UX/UI + APP',
            description: 'A MOBILE APP CONCEPT FOR ADHD USERS, DESIGNED TO SUPPORT EMOTIONAL REGULATION, TIME PLANNING, AND CALMING ROUTINES THROUGH INCLUSIVE AND LOW-FRICTION UX.',
            externalUrl: 'src/components/projects/adhd.html'
        },
        {
            id: 'Classical website',
            number: '03',
            title: 'Animal of Polis',
            category: 'UX/UI + WEBSITE',
            description: 'A DIGITAL ARCHIVE AND RESEARCH WEBSITE THAT HELPS SCHOLARS ORGANISE, BROWSE, AND INTERPRET ANIMAL-RELATED VISUAL AND TEXTUAL MATERIALS IN ANCIENT GREEK STUDIES.',
            /*hoverImage: */
            externalUrl: 'src/components/projects/greekanimal.html'
        },
        /* {
            id: 'earring',
            number: '04',
            title: 'NOIRMOON PIERCING',
            category: 'BRANDING + WEBSITE',
            description: 'THE FACULTY TO CERTIFY AND GUARANTEE THE QUALITY OF CANNABIS DERIVATIVES WITH A HIGH LEVEL OF CONFIDENCE. A NEW BRAND, AND NEW SERVICE IN ARGENTINA.',
            hoverImage: 'https://via.placeholder.com/350x250/3eeabf/ffffff?text=Hemp+Lab+Preview'
        },*/
      
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section__title section__title--neon">{t('projects.title')}</h2>
                <div className="neon-divider neon-divider--long"></div>

                <div className="projects__vertical-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            id={`project-${project.number}`}
                            className="project-card"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => {
                                if (project.externalUrl) {
                                    window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            onKeyDown={(e) => {
                                if ((e.key === 'Enter' || e.key === ' ') && project.externalUrl) {
                                    e.preventDefault();
                                    window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            role={project.externalUrl ? 'button' : undefined}
                            tabIndex={project.externalUrl ? 0 : undefined}
                        >
                            {/* Hover Image Background */}
                            {hoveredProject === project.id && (
                                <div 
                                    className="project-card__background-image"
                                    style={{
                                        backgroundImage: `url(${project.hoverImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                            )}

                            {/* Project Number */}
                            {hoveredProject !== project.id && (
                                <div className="project-card__number">
                                    {project.number}
                                </div>
                            )}

                            {/* Project Category Tag */}
                            {hoveredProject !== project.id && (
                                <div className="project-card__category">
                                    {project.category}
                                </div>
                            )}

                            {/* Project Content */}
                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
