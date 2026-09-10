import PageHero from '../components/PageHero'

const sectors = [
  {
    id: 'academy',
    name: 'A4IR Academy',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    desc: 'The foundational pillar of A4IR, building capacity through world-class training programmes and research initiatives that equip Africans for the 4IR landscape.',
    subsectors: ['Training', 'Research'],
    highlights: ['Curriculum designed by 4IR experts', 'Online and in-person delivery', 'Industry-recognised certifications'],
  },
  {
    id: 'agriculture',
    name: 'A4IR Agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    desc: 'Transforming African agriculture through cutting-edge Artificial Intelligence and Internet of Things technologies, boosting yield, reducing waste, and empowering farmers.',
    subsectors: ['Agro-AI', 'Agro-IoT'],
    highlights: ['Smart farming solutions', 'Precision agriculture tools', 'Supply chain optimization'],
  },
  {
    id: 'education',
    name: 'A4IR Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    desc: 'Reimagining education for the digital age through adaptive, blended, and e-learning solutions that make quality learning accessible across Africa.',
    subsectors: ['E-learning', 'Adaptive Learning', 'Blended Learning'],
    highlights: ['Personalised learning pathways', 'LMS platform development', 'Teacher capacity building'],
  },
  {
    id: 'economy',
    name: 'A4IR Economy',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    desc: 'Driving economic growth and fiscal efficiency through AI-powered cost analysis and intelligent economic planning tools for governments and enterprises.',
    subsectors: ['AI-Driven Cost Analysis', 'AI in Economic Planning and Management'],
    highlights: ['Economic modelling tools', 'Policy impact simulations', 'Revenue optimization systems'],
  },
  {
    id: 'governance',
    name: 'A4IR Governance',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80',
    desc: 'Modernising governance through data-driven policy design, implementation frameworks, and evaluation systems that build accountable and efficient public institutions.',
    subsectors: ['Policy Design', 'Policy Implementation', 'Policy Evaluation'],
    highlights: ['Digital governance frameworks', 'e-Government solutions', 'Regulatory technology tools'],
  },
  {
    id: 'health',
    name: 'A4IR Health',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    desc: 'Revolutionising healthcare delivery across Africa through health informatics, advanced analytics, and smart health technologies that improve outcomes and access.',
    subsectors: ['Health Informatics', 'Health Analytics', 'Smart Health'],
    highlights: ['Electronic health records', 'Disease surveillance systems', 'Telemedicine platforms'],
  },
  {
    id: 'industry',
    name: 'A4IR Industry',
    image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&q=80',
    desc: "Accelerating Africa's industrial transformation through AI integration and smart manufacturing systems that enhance productivity, quality, and competitiveness.",
    subsectors: ['AI in Industry', 'Smart Industry'],
    highlights: ['Industry 4.0 readiness assessments', 'Automation strategy development', 'Smart factory implementations'],
  },
  {
    id: 'security',
    name: 'A4IR Security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    desc: "Protecting Africa's digital infrastructure and physical environments through comprehensive cybersecurity, biometric, and smart security solutions.",
    subsectors: ['Cyber Security', 'Biometric Security', 'Smart Security'],
    highlights: ['Threat intelligence platforms', 'Biometric identity management', 'Integrated security operations'],
  },
]

export default function Sectors() {
  return (
    <>
      <PageHero
        tag="Sectors"
        title="Eight Sectors, One Vision"
        subtitle="A4IR operates across the full spectrum of African society — from the farm to the boardroom, the clinic to the courtroom — driving 4IR transformation where it matters most."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80"
      />

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sectors.map(({ id, name, image, desc, subsectors, highlights }) => (
              <div key={id}
                className="group rounded-sm overflow-hidden card-hover"
                style={{ background: '#F8FAFC', border: '1px solid rgba(15,23,42,0.10)' }}>
                <div className="relative h-52 overflow-hidden">
                  <img src={image} alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-md">{name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{desc}</p>

                  <div className="mb-5">
                    <div className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: '#C9A84C' }}>
                      Sub-sectors
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {subsectors.map((s) => (
                        <span key={s}
                          className="px-3 py-1 rounded-sm text-xs font-medium"
                          style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#C9A84C' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-xs font-medium tracking-wider uppercase mb-3">Key Offerings</div>
                    <ul className="space-y-1.5">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-slate-700 text-sm">
                          <span className="shrink-0 mt-px" style={{ color: '#C9A84C' }}>›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
