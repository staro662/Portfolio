// src/components/Footer.jsx
import React from "react";
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container footer__content">
                <p>{t('footer.copyright')}</p>
                <a
                    href="mailto:wytt657@outlook.com"
                    style={{
                        color: '#3eeabf',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseLeave={(e) => e.target.style.color = '#3eeabf'}
                    onMouseEnter={(e) => e.target.style.color = '#FF1493'}
                >
                    wytt657@outlook.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
