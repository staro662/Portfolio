import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            borderBottom: '1px solid #eee',
            position: 'sticky',
            top: 0,
            background: 'rgba(11, 13, 15, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000
        }}>
            <h1 style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '700',
                fontStyle: 'italic',
                fontFamily: '"inter", monospace'
            }}>
                <span style={{
                    background: 'linear-gradient(45deg, #FF1493, #be54d6ff, #2dd4aa)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>MI's</span> Portfolio

            </h1>

            <nav style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center', fontStyle: 'italic',
                fontFamily: '"intel", monospace'
            }}>
                <a href="#about" style={{ color: '#DDE3EA', textDecoration: 'none' }}>
                    {t('navbar.about')}
                </a>
                <a href="#projects" style={{ color: '#DDE3EA', textDecoration: 'none' }}>
                    {t('navbar.projects')}
                </a>
                {/*  <a href="#contact" style={{ color: '#DDE3EA', textDecoration: 'none' }}>
                    {t('navbar.contact')}
                </a>*/}

                {/* Language toggle button */}
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'linear-gradient(45deg, #FF1493, #803eeaff, #2dd4aa)',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '8px 16px',
                        color: '#0B0D0F',
                        fontWeight: '600',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 10px rgba(62, 234, 191, 0.3)',
                        minWidth: '60px',
                        fontStyle: 'italic',
                        fontFamily: '"Audiowide", monospace'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 0 15px rgba(62, 234, 191, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 0 10px rgba(62, 234, 191, 0.3)';
                    }}
                >
                    {language === 'en' ? '中文' : 'English'}
                </button>
            </nav>
        </header>
    )
}
export default Navbar
