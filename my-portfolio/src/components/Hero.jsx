import TextPressure from './TextPressure'
import { useTranslation } from '../hooks/useTranslation'
// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
// Font used - https://compressa.preusstype.com/

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero section">
            <div className="container">
                <div className="hero__fx">
                    <TextPressure
                        text={t('hero.hello')}
                        className="text-pressure-neon"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        minFontSize={60}
                    />
                </div>
                <h1 className="hero__title section__title--neon">{t('hero.title')}</h1>
                <p className="hero__subtitle">
                    {t('hero.subtitle')}
                </p>
            </div>
        </section>
    )
}

export default Hero
