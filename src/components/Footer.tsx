import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

const sectors = [
  'A4IR Academy','A4IR Agriculture','A4IR Education',
  'A4IR Economy','A4IR Governance','A4IR Health',
  'A4IR Industry','A4IR Security',
]

export default function Footer() {
  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid rgba(15,23,42,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ border: '2px solid #9442C8', background: '#FAF5FF' }}>
              <span className="text-[10px] font-bold" style={{ color: '#9442C8' }}>A4IR</span>
            </div>
            <div>
              <div className="font-display text-[#2D2438] font-bold text-lg leading-tight">A4IR</div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: '#9442C8' }}>African 4IR</div>
            </div>
          </div>
          <p className="text-[#6B5B75] text-sm leading-relaxed mb-4">
            Championing African 4th Industrial Revolution. RC: 3432957 · Incorporated 2021.
          </p>
          <a href="https://www.african4ir.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-[#B76AE6] transition-colors"
            style={{ color: '#9442C8' }}>
            <Globe size={14} />african4ir.com
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#2D2438] font-semibold text-sm tracking-wider uppercase mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Services' },
              { to: '/sectors', label: 'Sectors' },
              { to: '/projects', label: 'Projects' },
              { to: '/events', label: 'Events' },
              { to: '/contact', label: 'Contact Us' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-[#6B5B75] text-sm hover:text-[#9442C8] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h4 className="text-[#2D2438] font-semibold text-sm tracking-wider uppercase mb-6">Our Sectors</h4>
          <ul className="space-y-3">
            {sectors.map((s) => (
              <li key={s}>
                <Link to="/sectors" className="text-[#6B5B75] text-sm hover:text-[#9442C8] transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#2D2438] font-semibold text-sm tracking-wider uppercase mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-0.5 shrink-0" style={{ color: '#9442C8' }} />
              <a href="mailto:info@african4ir.com" className="text-[#6B5B75] text-sm hover:text-[#9442C8] transition-colors">
                info@african4ir.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-0.5 shrink-0" style={{ color: '#9442C8' }} />
              <div className="text-[#6B5B75] text-sm space-y-1">
                <div>+234-806-700-7462</div>
                <div>+234-080-5292-0626</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#9442C8' }} />
              <p className="text-[#6B5B75] text-sm">
                1A, Block D, Alhaji Adebayo Layout,<br />
                Apete, Ibadan, Oyo State, Nigeria.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(15,23,42,0.10)' }} className="py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7C6A86] text-xs">
            © {new Date().getFullYear()} A4IR — African 4th Industrial Revolution. All rights reserved.
          </p>
          <p className="text-[#7C6A86] text-xs">RC: 3432957 · Incorporated 2021</p>
        </div>
      </div>
    </footer>
  )
}
