import React, { useState } from 'react'
import StaggeredMenu from '../components/StaggeredMenu'
import TBOverview from '../image/TB-overview.png'
import StackedGenderMap from '../image/STACKEDGENDER-MAP.png'
import PieChart from '../image/piechart.jpg'
import Genderbar from '../image/genderbar1.png'
import DomainArea from '../image/domainarea.png'

const tags = [
  'Tableau',
  'Tableau Prep',
  'Dashboard Design',
  'Interactive Filtering',
  'Data Viz Theory',
]

const stats = [
  { value: '11,000+', label: 'Historical Figures' },
  { value: '3500BC -- 1981AD', label: 'Temporal Range' },
  { value: '8', label: 'Unique Domains' },
]

const questions = [
  'How does gender representation shift across centuries?',
  'When does the domains show the most shifts?',
  'Does the "Western Canon" dominate the dataset?',
]

const prepSteps = [
  { num: '01', title: 'Workflow', desc: 'Tableau Prep pipeline setup' },
  { num: '02', title: 'Cleaning', desc: 'Filter null/unknown records' },
  { num: '03', title: 'Standardization', desc: 'Standardise country labels (case & typos)' },
  { num: '04', title: 'Output', desc: 'Export a clean .hyper extract' },
]

const dashboardCards = [
  { title: 'Global Map', sub: 'Overview with hovering interactions', image: StackedGenderMap },
  { title: 'Domain Share', sub: 'Radial Pie Breakdown', image: PieChart },
  { title: 'Gender Gap', sub: 'Side-by-Side Bar Charts', image: Genderbar },
  { title: 'Historical Timeline', sub: 'Stacked Area Over Time', image: DomainArea },
]

const encodings = [
  { rationale: 'Pageviews', property: 'Mapped to Size' },
  { rationale: 'Gender', property: 'Mapped to Hue' },
  { rationale: 'Country', property: 'Spatial Position' },
  { rationale: 'Birth Year', property: 'X-Axis Position' },
]

const insights = [
  {
    tag: 'Data: 1400-1950 AD',
    text: 'The "Western Canon" bias is mathematically verifiable, with over 60% of entries originating from Europe despite population distribution.',
  },
  {
    tag: 'Data: Gender Ratio',
    text: 'Women account for under 11% of the dataset overall, and their representation is almost absent in Exploration (~0%), Sports (~0.01%), and Business & Law (~0.02%).This highlights a strong gender imbalance that is not uniform across domains, with “public-facing” and institution-linked fields showing the widest gaps.',
  },
  {
    tag: 'Data: Domain Shift',
    text: 'After approx. 1500–1600AD, both the diversity of domains and overall attention increase sharply, reflecting the expansion of documentation and media visibility in modern eras.',
  },
]

const flowIcons = [
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="overview" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="28" />
    <circle cx="32" cy="32" r="18" />
    <circle cx="32" cy="32" r="8" />
  </svg>,
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="zoom" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="16" />
    <path d="M38 38L52 52" strokeLinecap="round" />
    <circle cx="32" cy="32" r="10" opacity="0.5" />
  </svg>,
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="details" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="12" width="44" height="40" rx="3" />
    <line x1="16" y1="24" x2="48" y2="24" />
    <line x1="16" y1="34" x2="48" y2="34" />
    <line x1="16" y1="44" x2="32" y2="44" />
  </svg>,
]

const flowTitles = ['Overview', 'Zoom & Filter', 'Details on Demand']

export default function PantheonCaseStudy() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const menuItems = [
    { label: 'ADHD TOOLS', ariaLabel: 'Open ADHD project section', link: '/#project-02' },
    { label: 'ANIMAL OF POLIS', ariaLabel: 'Open Animal of Polis project section', link: '/#project-03' },
     //{ label: 'NOIRMOON', ariaLabel: 'Open Noirmoon project section', link: '/#project-01' }
  ]
  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/xiaofan-mi-176337253' },
    { label: 'Email', link: 'mailto:wytt657@outlook.com' },
  ]

  return (
    <div className="pantheon-page">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen={true}
        colors={['#ffffff', '#ffffff']}
        accentColor="#ff1493"
        onMenuOpen={() => console.log('Project menu opened')}
        onMenuClose={() => console.log('Project menu closed')}
      />
      <main className="case-study-container">
        <section className="hero">
          <h2 className="subtitle">Data Visualization Study</h2>
          <h1>Pantheon 1.0</h1>
          <h1 className="hero-subtitle">Fame Bias Explorer</h1>

          <div className="tags-container">
            {tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>

          <div className="hero-grid">
            <div className="stats-col">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-media">
              <img src={TBOverview} alt="Dashboard Mockup" className="hero-media__img" />
            </div>
          </div>
        </section>

        <section className="problem-section">
          <div className="problem-content">
            <h2>Why This Dashboard?</h2>
            <p>
              Pantheon is a dataset of globally notable individuals, 
              combining biographical attributes (gender, country, domain, birth year)
              with Wikipedia pageview-based attention metrics, enabling analysis of how fame and visibility vary 
               across language ecosystems and geography. 
            </p>
            <p>
              This project aimed to visualize the gender and geographic gaps in recorded history.
              The goal was to create a dashboard that allows users to verify their own assumptions
              about who gets remembered, interrogating data through multiple lenses of time, place, and
              domains.
            </p>
          </div>
          <div className="key-questions">
            <h3>Key Questions</h3>
            <ul className="question-list">
              {questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>Data Preparation</h2>
          <div className="stepper-container">
            {prepSteps.map((step) => (
              <div className="step-item" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Dashboard Breakdown</h2>
          <div className="grid-breakdown">
            {dashboardCards.map((card) => (
              <div className="grid-item" key={card.title}>
                <div className="grid-media">
                  <div
                    className="grid-viz-trigger"
                    onMouseEnter={() => setHoveredCard(card)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onFocus={() => setHoveredCard(card)}
                    onBlur={() => setHoveredCard(null)}
                    tabIndex={0}
                    aria-label={`Preview ${card.title}`}
                  >
                    <img src={card.image} alt={card.title} className="grid-viz-image" />
                  </div>
                </div>
                <div className="grid-caption">
                  <div className="caption-title">{card.title}</div>
                  <div className="caption-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Visual Encoding</h2>
          <div className="encoding-grid">
            {encodings.map((encoding) => (
              <div className="encoding-card" key={encoding.rationale}>
                <div className="enc-rationale">{encoding.rationale}</div>
                <div className="enc-property">{encoding.property}</div>
              </div>
            ))}
          </div>
          <div className="principle-callout">
            "Visual attributes were selected to minimise cognitive load and keep comparisons readable across views."
          </div>
        </section>

        <section>
          <h2>Interaction Flow</h2>
          <div className="interaction-flow">
            {flowTitles.map((title, idx) => (
              <div key={title} className="flow-card">
                <div className="flow-card__icon">
                  {flowIcons[idx]}
                </div>
                <div className="flow-card__title">{title}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Key Findings</h2>
          <div className="insights-list">
            {insights.map((insight) => (
              <div className="insight-card" key={insight.tag}>
                <span className="evidence-tag">{insight.tag}</span>
                <p className="insight-text">{insight.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      {hoveredCard && (
        <div className="hover-zoom-preview" aria-hidden="true">
          <img
            src={hoveredCard.image}
            alt={`${hoveredCard.title} enlarged preview`}
            className="hover-zoom-image"
          />
          <div className="hover-zoom-title">{hoveredCard.title}</div>
        </div>
      )}
    </div>
  )
}
