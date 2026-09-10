import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Monitor, Shield, Network, BarChart2 } from 'lucide-react'
import PageHero from '../components/PageHero'

const events = [
  {
    num: '01',
    title: 'Inauguration of Projects',
    icon: Calendar,
    type: 'Ceremony',
    desc: "A landmark event marking the official launch and commissioning of A4IR's three flagship projects. An evening of celebration, live demonstration, and partnership with industry leaders.",
    highlights: ['Live demonstration of flagship projects', 'Keynote addresses by industry leaders', 'Networking with 4IR practitioners', 'Media coverage and press conference'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    badge: 'Flagship Event',
    badgeBg: '#C9A84C',
    badgeColor: '#FFFFFF',
  },
  {
    num: '02',
    title: 'Data Analytics Workshop',
    icon: BarChart2,
    type: 'Workshop',
    desc: 'A hands-on workshop exploring data analytics tools, techniques, and best practices. Participants gain practical experience with data visualisation, statistical analysis, and business intelligence platforms.',
    highlights: ['Hands-on data visualisation exercises', 'Introduction to BI tools (Power BI, Tableau)', 'Case studies from African enterprises', 'Certification of participation'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    badge: 'Technical',
    badgeBg: '#1D4ED8',
    badgeColor: '#fff',
  },
  {
    num: '03',
    title: 'Web Development Workshop',
    icon: Monitor,
    type: 'Workshop',
    desc: 'An intensive workshop on modern web development. From HTML/CSS fundamentals to React, participants build real-world projects and gain employable digital skills.',
    highlights: ['HTML, CSS, and JavaScript foundations', 'React and modern frontend frameworks', 'Backend integration and APIs', 'Project-based learning with portfolio output'],
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&q=80',
    badge: 'Technical',
    badgeBg: '#1D4ED8',
    badgeColor: '#fff',
  },
  {
    num: '04',
    title: 'Cybersecurity Workshop',
    icon: Shield,
    type: 'Workshop',
    desc: 'A comprehensive workshop on digital security, ethical hacking, and threat mitigation. Participants understand the cybersecurity landscape and learn practical techniques for protecting digital assets.',
    highlights: ['Fundamentals of cybersecurity', 'Ethical hacking and penetration testing intro', 'Social engineering awareness', 'Security policy and compliance frameworks'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    badge: 'Security',
    badgeBg: '#991B1B',
    badgeColor: '#fff',
  },
  {
    num: '05',
    title: 'Networking Workshop',
    icon: Network,
    type: 'Workshop',
    desc: "A strategic networking and professional development event connecting A4IR's community of practitioners, innovators, entrepreneurs, and policy leaders across Africa.",
    highlights: ['Structured networking sessions', 'Panel discussions with industry experts', 'Pitch showcase for 4IR startups', 'Partnership and collaboration opportunities'],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    badge: 'Community',
    badgeBg: '#166534',
    badgeColor: '#fff',
  },
]

export default function Events() {
  return (
    <>
      <PageHero
        tag="Events"
        title="Learn, Connect, Innovate"
        subtitle="A4IR convenes Africa's brightest minds through workshops, ceremonies, and collaborative events designed to accelerate 4IR adoption across the continent."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80"
      />

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {events.map(({ num, title, icon: Icon, type, desc, highlights, image, badge, badgeBg, badgeColor }) => (
            <div key={num}
              className="grid lg:grid-cols-5 overflow-hidden rounded-sm group card-hover"
              style={{ background: '#F8FAFC', border: '1px solid rgba(15,23,42,0.10)' }}>

              {/* Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                <img src={image} alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 hidden lg:block"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(248,250,252,0.5))' }} />
                <div className="absolute inset-0 lg:hidden"
                  style={{ background: 'linear-gradient(to top, rgba(248,250,252,0.6), transparent)' }} />
                <div className="absolute top-4 left-4 font-display text-6xl font-bold"
                  style={{ color: 'rgba(148,66,200,0.2)' }}>{num}</div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wide"
                    style={{ background: badgeBg, color: badgeColor }}>{badge}</span>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Icon size={12} /><span>{type}</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#C9A84C] transition-colors">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5" style={{ color: '#C9A84C' }}>›</span>
                      <span className="text-slate-700 text-xs">{h}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-4"
                  style={{ color: '#9442C8' }}>
                  Register Interest <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 section-divider" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-5">Want to Attend or Partner for an Event?</h2>
          <p className="text-slate-600 mb-8">
            Reach out to us for event registrations, sponsorship opportunities, or speaking engagements.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-sm transition-colors"
            style={{ background: '#C9A84C', color: '#0F172A' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
