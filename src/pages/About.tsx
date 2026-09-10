import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Globe, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'

const values = [
  { title: 'Innovation', desc: 'Driving 4IR solutions tailored to unique African challenges and opportunities.', icon: '🚀' },
  { title: 'Impact',     desc: 'Every initiative is designed to create measurable, sustainable change across the continent.', icon: '🌍' },
  { title: 'Inclusion',  desc: 'Ensuring the benefits of the 4th Industrial Revolution reach all Africans.', icon: '🤝' },
  { title: 'Integrity',  desc: 'Upholding the highest standards of transparency, ethics, and accountability.', icon: '⚖️' },
]

const milestones = [
  { year: '2021', text: 'A4IR incorporated in Nigeria (RC: 3432957)' },
  { year: '2022', text: 'Launch of A4IR Academy and first training cohort' },
  { year: '2023', text: 'Expansion into eight sector verticals' },
  { year: '2024', text: 'Flagship projects initiated across AI, Procurement and XR' },
  { year: '2025', text: 'National workshops and industry partnerships activated' },
]

export default function About() {
  return (
    <>
      <PageHero
        tag="About A4IR"
        title="Driving Africa's 4th Industrial Revolution"
        subtitle="We are a purpose-driven organisation committed to positioning Africa at the leading edge of global technological transformation through research, training, and strategic consultancy."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=80"
      />

      {/* Story */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px" style={{ background: '#9442C8' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#9442C8' }}>Our Story</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Born to Champion African Innovation</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                A4IR — African 4th Industrial Revolution — was incorporated in 2021 with a singular mission:
                to champion the transformative potential of 4IR technologies across the African continent.
                Registered in Nigeria (RC: 3432957), we operate at the intersection of technology, education, and policy.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our work spans eight critical sectors — from Agriculture and Health to Security and Governance —
                delivering cutting-edge training, applied research, and strategic consultancy that equips
                individuals, organisations, and governments to thrive in the digital age.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Incorporated', value: '2021' },
                  { icon: Globe,    label: 'Headquarters', value: 'Ibadan, Nigeria' },
                  { icon: MapPin,   label: 'RC Number',    value: '3432957' },
                  { icon: Mail,     label: 'Email',        value: 'info@african4ir.com' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-4 rounded-sm" style={{ background: '#F8FAFC', border: '1px solid rgba(15,23,42,0.10)' }}>
                    <Icon size={14} className="mb-2" style={{ color: '#C9A84C' }} />
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-slate-900 text-sm font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="A4IR team" className="rounded-sm object-cover w-full h-[500px]" />
              <div className="absolute -bottom-6 -right-6 p-6 rounded-sm"
                style={{ background: '#F8FAFC', border: '1px solid rgba(201,168,76,0.3)' }}>
                <div className="font-display text-3xl font-bold" style={{ color: '#C9A84C' }}>8</div>
                <div className="text-slate-600 text-xs uppercase tracking-wider mt-1">Sectors Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-divider" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px" style={{ background: '#9442C8' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#9442C8' }}>Our Values</span>
              <div className="w-8 h-px" style={{ background: '#9442C8' }} />
            </div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">What Guides Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, icon }) => (
              <div key={title}
                className="p-8 rounded-sm text-center group card-hover"
                style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.10)' }}>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C9A84C] transition-colors">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px" style={{ background: '#9442C8' }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#9442C8' }}>Journey</span>
              <div className="w-8 h-px" style={{ background: '#9442C8' }} />
            </div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px" style={{ background: 'rgba(148,66,200,0.2)' }} />
            <div className="space-y-10">
              {milestones.map(({ year, text }) => (
                <div key={year} className="flex items-start gap-8">
                  <div className="w-16 text-right shrink-0">
                    <span className="font-display font-bold" style={{ color: '#9442C8' }}>{year}</span>
                  </div>
                  <div className="relative flex items-start gap-6 pl-6">
                    <div className="absolute -left-2 top-2 w-4 h-4 rounded-full border-2 bg-navy"
                      style={{ borderColor: '#C9A84C' }} />
                    <p className="text-slate-700 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-divider" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
              alt="African innovation" className="rounded-sm object-cover w-full h-80" />
            <div>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Ready to Partner With Us?</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you are an individual seeking skills, an organisation looking for consultancy, or a
                government institution crafting forward-looking policies — A4IR is your partner for the 4IR journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm transition-colors"
                  style={{ background: '#C9A84C', color: '#0F172A' }}>
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <Link to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm transition-colors hover:text-[#C9A84C]"
                  style={{ border: '1px solid rgba(15,23,42,0.20)', color: '#0F172A' }}>
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
