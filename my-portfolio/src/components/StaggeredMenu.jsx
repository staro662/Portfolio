import { useMemo, useState } from 'react'
import './StaggeredMenu.css'

export default function StaggeredMenu({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#111111',
  changeMenuColorOnOpen = true,
  colors = ['#ffffff', '#ffffff'],
  logoUrl,
  accentColor = '#ff1493',
  onMenuOpen,
  onMenuClose,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const sideClass = position === 'left' ? 'staggered-menu--left' : 'staggered-menu--right'

  const buttonColor = useMemo(() => {
    if (changeMenuColorOnOpen && isOpen) return openMenuButtonColor
    return menuButtonColor
  }, [changeMenuColorOnOpen, isOpen, menuButtonColor, openMenuButtonColor])

  const toggleMenu = () => {
    const next = !isOpen
    setIsOpen(next)
    if (next) onMenuOpen?.()
    else onMenuClose?.()
  }

  const closeMenu = () => {
    setIsOpen(false)
    onMenuClose?.()
  }

  return (
    <>
      <button
        type="button"
        className={`staggered-menu__toggle ${isOpen ? 'is-open' : ''} ${sideClass}`}
        aria-label={isOpen ? 'Close project menu' : 'Open project menu'}
        onClick={toggleMenu}
        style={{ color: buttonColor }}
      >
        {isOpen ? 'Close X' : 'Menu +'}
      </button>

      {isOpen ? <div className="staggered-menu__backdrop" onClick={closeMenu} /> : null}

      <aside
        className={`staggered-menu ${sideClass} ${isOpen ? 'is-open' : ''}`}
        style={{
          '--menu-grad-1': colors[0] || '#ffffff',
          '--menu-grad-2': colors[1] || '#ffffff',
          '--menu-accent': accentColor,
        }}
      >
        <div className="staggered-menu__header">
          {logoUrl ? <img src={logoUrl} alt="Menu logo" className="staggered-menu__logo" /> : null}
          <div className="staggered-menu__title">Other Projects</div>
        </div>

        <nav className="staggered-menu__nav" aria-label="Project links">
          {items.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.link}
              aria-label={item.ariaLabel || item.label}
              className="staggered-menu__item"
              style={{ transitionDelay: `${100 + index * 70}ms` }}
              onClick={closeMenu}
            >
              <span className="staggered-menu__label">{item.label}</span>
              {displayItemNumbering ? <span className="staggered-menu__number">{String(index + 1).padStart(2, '0')}</span> : null}
            </a>
          ))}
        </nav>

        {displaySocials && socialItems.length > 0 ? (
          <div className="staggered-menu__socials">
            <div className="staggered-menu__socials-title">Socials</div>
            {socialItems.map((social) => (
              <a key={social.label} href={social.link} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        ) : null}
      </aside>
    </>
  )
}
