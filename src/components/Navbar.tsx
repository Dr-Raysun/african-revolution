import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/sectors', label: 'Sectors' },
  { to: '/projects', label: 'Projects' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.25)',
        boxShadow: '0 8px 32px rgba(15,23,42,0.12)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              style={{ border: '2px solid #C9A84C', background: '#F8FAFC' }}
            >
              <span className="text-[10px] font-bold" style={{ color: '#C9A84C' }}>A4IR</span>
            </div>
            <div>
              <div className="font-display text-slate-900 font-bold text-lg leading-tight">A4IR</div>
              <div className="text-[10px] tracking-widest uppercase leading-tight" style={{ color: '#C9A84C' }}>African 4IR</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-[#C9A84C]' : 'text-slate-700 hover:text-slate-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className="absolute bottom-0 left-4 right-4 h-px transition-transform duration-200 origin-left"
                      style={{
                        background: '#C9A84C',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-sm transition-colors duration-200"
            style={{ background: '#C9A84C', color: '#0F172A' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8C96B')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C9A84C')}
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: 'rgba(255,255,255,0.96)', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                    isActive ? 'text-[#C9A84C]' : 'text-slate-700 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-5 py-3 font-semibold text-sm rounded-sm"
              style={{ background: '#C9A84C', color: '#0F172A' }}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
