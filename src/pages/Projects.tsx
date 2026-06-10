import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const projects = [
  {
    num: '01',
    title: 'AI-Assisted Employee Audit',
    category: 'Artificial Intelligence · Human Resources',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    desc: 'A comprehensive AI-powered system that streamlines employee performance evaluation, identifies workforce strengths and gaps, and delivers data-driven insights for HR decision-making. The platform leverages machine learning to reduce bias and enhance objectivity in audits.',
    outcomes: [
      'Automated performance data collection',
      'Bias-reduction through algorithmic evaluation',
      'Real-time dashboard for HR leadership',
      'Predictive analytics for talent management',
    ],
  },
  {
    num: '02',
    title: 'Smart Public Procurement System',
    category: 'AI · Government · Transparency',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80',
    desc: 'A next-generation procurement platform for public sector organisations that uses artificial intelligence to enhance transparency, prevent fraud, streamline vendor selection, and ensure compliance — reducing cost and corruption in government spending.',
    outcomes: [
      'End-to-end digital procurement workflow',
      'AI-powered vendor scoring and selection',
      'Fraud detection and anomaly alerting',
      'Blockchain-enabled audit trails',
    ],
  },
  {
    num: '03',
    title: 'XR for Safe Environment Training',
    category: 'Extended Reality · Safety · Training',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=900&q=80',
    desc: 'An Extended Reality (XR) training system that immerses workers in realistic, risk-free simulations of hazardous environments. Combining VR and AR, the solution enables organisations to train safely, reduce accidents, and meet regulatory compliance.',
    outcomes: [
      'VR/AR immersive safety scenarios',
      'Risk-free hazard response training',
      'Real-time performance assessment',
      'Compliance tracking and certification',
    ],
  },
]

export default function Projects() {
  return (
    <>
      <PageHero
        tag="Flagship Projects"
        title="Where Technology Meets Impact"
        subtitle="A4IR's flagship projects demonstrate the real-world power of 4IR technologies — delivering measurable outcomes across the public and private sectors."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
      />

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {projects.map(({ num, title, category, status, image, desc, outcomes }, i) => (
            <div key={num} className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img src={image} alt={title} className="rounded-sm object-cover w-full h-[440px]" />
                <div className="absolute inset-0 rounded-sm"
                  style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.7), transparent)' }} />
                <div className="absolute top-4 left-4 font-display text-8xl font-bold"
                  style={{ color: 'rgba(201,168,76,0.15)' }}>{num}</div>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-sm"
                  style={{ background: '#C9A84C' }}>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#0A1628' }}>{status}</span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px" style={{ background: '#C9A84C' }} />
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>
                    Project {num}
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
                <div className="text-gray-500 text-xs tracking-wider uppercase mb-6">{category}</div>
                <p className="text-gray-400 leading-relaxed mb-8">{desc}</p>

                <div className="p-6 mb-8 rounded-sm"
                  style={{ background: '#0D1F38', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: '#C9A84C' }}>
                    Key Outcomes
                  </div>
                  <ul className="space-y-3">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <span className="text-lg leading-none mt-0.5 shrink-0" style={{ color: '#C9A84C' }}>›</span>
                        <span className="text-gray-300 text-sm">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4"
                  style={{ color: '#C9A84C' }}>
                  Learn More or Partner With Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inauguration Banner */}
      <section className="py-20 section-divider" style={{ background: '#060E1C' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-sm"
            style={{ background: '#0D1F38', border: '1px solid rgba(201,168,76,0.2)' }}>
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full animate-pulse-gold" style={{ background: '#C9A84C' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>Upcoming</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Inauguration of Projects</h3>
              <p className="text-gray-400 text-sm max-w-xl">
                Join us for the official inauguration of our flagship projects — a milestone event celebrating
                African 4IR progress and the real-world impact of our initiatives.
              </p>
            </div>
            <Link to="/events"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm transition-colors"
              style={{ background: '#C9A84C', color: '#0A1628' }}>
              View Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
