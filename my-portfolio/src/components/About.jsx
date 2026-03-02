// src/components/About.jsx
import React from "react";
import { useTranslation } from '../hooks/useTranslation';
import LogoLoop from './logo/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiJavascript, SiFigma, SiWebgl, SiHtml5, SiCss3, SiTableau } from 'react-icons/si';

const About = () => {
    const { t } = useTranslation();

    // Technology icon data
    const techLogos = [
        {
            node: <SiReact style={{ color: '#61DAFB', fontSize: '48px' }} />,
            title: "React",
            href: "https://react.dev"
        },
        {
            node: <SiJavascript style={{ color: '#F7DF1E', fontSize: '48px' }} />,
            title: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            node: <SiHtml5 style={{ color: '#E34F26', fontSize: '48px' }} />,
            title: "HTML5",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            node: <SiCss3 style={{ color: '#1572B6', fontSize: '48px' }} />,
            title: "CSS3",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            node: <SiPython style={{ color: '#3776AB', fontSize: '48px' }} />,
            title: "Python",
            href: "https://www.python.org"
        },
        {
            node: <SiFigma style={{ color: '#F24E1E', fontSize: '48px' }} />,
            title: "Figma",
            href: "https://www.figma.com"
        },
        {
            node: <SiTableau style={{ color: '#E97627', fontSize: '48px' }} />,
            title: "Tableau",
            href: "https://www.tableau.com"
        }
    ];

    // 样式定义
    const styles = {
        aboutContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            minHeight: '60vh',
            '@media (min-width: 992px)': {
                gridTemplateColumns: '1.2fr 0.8fr'
            }
        },
        introText: {
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            lineHeight: '1.4',
            fontWeight: '600',
            color: 'var(--text)',
            margin: '0',
            fontStyle: 'italic',
            textShadow: '0 0 8px rgba(168, 229, 12, 0.78), 0 0 16px rgba(166, 218, 36, 0.67)'

        },
        highlight: {

            fontWeight: '600',
            fontStyle: 'italic',
            textShadow: '0 0 8px rgba(168, 229, 12, 0.78), 0 0 16px rgba(166, 218, 36, 0.67)'
        },
        skillsCard: {
            background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(62, 234, 191, 0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
        },
        skillItem: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        },
        skillName: {
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--text)'
        },
        skillLevel: {
            width: '100px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden'
        },
        skillProgress: {
            height: '100%',
            background: 'linear-gradient(90deg, #FF1493, #3eeabf)',
            borderRadius: '2px',
            transition: 'width 0.8s ease'
        }
    };

    // Skills data
    const skills = [
        { name: 'User Research', level: 90 },
        { name: 'User-Centered Design', level: 85 },
        { name: 'User Understanding', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'Data Analysis', level: 95 }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section__title section__title--neon">{t('about.title')}</h2>
                <div className="neon-divider neon-divider--short"></div>

                {/* Main content area */}
                <div className="about__main-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gap: '3rem',
                    alignItems: 'center',
                    marginTop: '3rem'
                }}>
                    {/* Left side: Introduction text */}
                    <div>
                        <p style={styles.introText}>
                            {t('about.greeting')} <span style={styles.highlight}>{t('about.name')}</span>
                        </p>

                        <p
                            style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--muted)',
                                marginTop: '2rem',
                                maxWidth: '90%'
                            }}
                            dangerouslySetInnerHTML={{ __html: t('about.intro') }}
                        />
                    </div>

                    {/* Right side: Skills card (desktop display) */}
                    <div className="about__skills-desktop" style={{ display: 'none' }}>
                        <div style={styles.skillsCard}>
                            {skills.map((skill, index) => (
                                <div key={index} style={styles.skillItem}>
                                    <span style={styles.skillName}>{skill.name}</span>
                                    <div style={styles.skillLevel}>
                                        <div
                                            style={{
                                                ...styles.skillProgress,
                                                width: `${skill.level}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile skills display */}
                <div className="about__skills-mobile" style={{ marginTop: '3rem' }}>
                    <div style={{
                        ...styles.skillsCard,
                        background: 'rgba(17, 20, 23, 0.8)'
                    }}>
                        <h3 style={{
                            color: '#FF1493',
                            fontSize: '1.3rem',
                            margin: '0 0 1rem 0',
                            textAlign: 'center'
                        }}>
                            {t('about.skills')}
                        </h3>
                        {skills.map((skill, index) => (
                            <div key={index} style={styles.skillItem}>
                                <span style={styles.skillName}>{skill.name}</span>
                                <div style={styles.skillLevel}>
                                    <div
                                        style={{
                                            ...styles.skillProgress,
                                            width: `${skill.level}%`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-screen skills showcase */}
            <div style={{
                width: '100vw',
                height: '100px',
                position: 'relative',
                overflow: 'hidden',
                marginLeft: 'calc(-50vw + 50%)',
                marginTop: '3rem',
                marginBottom: '1rem'
            }}>
                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={70}
                    pauseOnHover
                    scaleOnHover
                    fadeOut={true}
                    fadeOutColor="#0a0a0a"
                    ariaLabel="Technology skills"
                />
            </div>
        </section>
    );
};

export default About;
