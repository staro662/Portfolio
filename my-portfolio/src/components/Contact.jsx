// src/components/Contact.jsx
import React from "react";
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section__title section__title--neon">{t('contact.title')}</h2>
                <div className="neon-divider"></div>
                <p className="section__intro">
                    {t('contact.intro')}
                </p>
                <form className="contact__form">
                    <input type="text" placeholder={t('contact.form.name')} required />
                    <input type="email" placeholder={t('contact.form.email')} required />
                    <textarea placeholder={t('contact.form.message')} rows="5" required></textarea>
                    <button type="submit">{t('contact.form.submit')}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
