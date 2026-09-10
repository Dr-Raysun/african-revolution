import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, FlaskConical, Lightbulb } from 'lucide-react'
import PageHero from '../components/PageHero'

const services = [
  {
    icon: GraduationCap,
    title: 'Training',
    tagline: 'Upskilling Africa for the Digital Age',
    desc: 'Our training programmes equip individuals and teams with practical 4IR competencies. From foundational digital literacy to advanced AI, IoT, and data analytics courses — delivered online and in person.',
    offerings: [
      'AI & Machine Learning Fundamentals',
      'IoT Systems and Applications',
      'Data Analytics & Business Intelligence',
      'Cybersecurity Essentials',
      'Digital Transformation Leadership',
      'Extended Reality (XR) Applications',
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  },
  {
    icon: FlaskConical,
    title: 'Research',
    tagline: 'Evidence-Driven Innovation',
    desc: 'A4IR conducts rigorous applied research that informs policy, drives product development, and contributes to the global body of knowledge on 4IR in the African context.',
    offerings: [
      'AI Policy and Ethics Research',
      'Agricultural Technology Studies',
      'Health Informatics Research',
      'Economic Impact Assessments',
      'Governance Technology Studies',
      'Industry 4.0 Feasibility Analysis',
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543559612233?w=800&q=80',
  },
  {
    icon: Lightbulb,
    title: 'Consultancy',
    tagline: 'Strategic Guidance for the Digital Era',
    desc: 'Our expert consultants work closely with organisations, government agencies, and enterprises to develop and implement 4IR strategies that translate technological opportunities into tangible outcomes.',
    offerings: [
      'Digital Transformation Strategy',
      'AI Implementation Roadmaps',
      'Public Sector Technology Advisory',
      'Smart Systems Integration',
      'Workforce Transition Planning',
      'Technology Policy Frameworks',
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Three Pillars of Transformation"
        subtitle="Training, Research, and Consultancy — the foundations through which A4IR empowers individuals, institutions, and industries to lead in the 4th Industrial Revolution."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80"
      />

      {services.map(({ icon: Icon, title, tagline, desc, offerings, image }, i) => (
        <section
          key={title}
          className="py-24 section-divider"
          style={{ background: i % 2 === 0 ? '#FFFFFF' : '#FFFFFF' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ background: 'rgba(148,66,200,0.1)' }}>
                    <Icon size={20} style={{ color: '#9442C8' }} />
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#9442C8' }}>{title}</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">{tagline}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">{desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {offerings.map((o) => (
                    <div key={o} className="flex items-start gap-2">
                      <span className="shrink-0" style={{ color: '#C9A84C' }}>›</span>
                      <span className="text-slate-700 text-sm">{o}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm transition-colors"
                  style={{ background: '#C9A84C', color: '#0F172A' }}>
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img src={image} alt={title} className="rounded-sm object-cover w-full h-[420px]" />
                <div className="absolute inset-0 rounded-sm"
                  style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)' }} />
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-sm"
                  style={{ background: '#C9A84C' }}>
                  <span className="font-bold text-sm" style={{ color: '#FFFFFF' }}>{title}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 section-divider" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Which Service is Right for You?</h2>
          <p className="text-slate-600 mb-8">
            Let us have a conversation about your goals and how A4IR can help you achieve them.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-sm transition-colors"
            style={{ background: '#C9A84C', color: '#0F172A' }}>
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
