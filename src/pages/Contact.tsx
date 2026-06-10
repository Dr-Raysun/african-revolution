import { useState } from 'react'
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: '#0D1F38',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '2px',
    padding: '12px 16px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  }

  return (
    <>
      <PageHero
        tag="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Whether you have a question, a partnership proposal, or want to attend one of our events — our team is ready to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80"
      />

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px" style={{ background: '#C9A84C' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>Get in Touch</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                Reach us through any of the channels below. We typically respond within one business day.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', content: <a href="mailto:info@african4ir.com" className="text-white hover:text-[#C9A84C] transition-colors font-medium">info@african4ir.com</a> },
                  { icon: Phone, label: 'Phone', content: <div className="space-y-1"><a href="tel:+2348067007462" className="block text-white hover:text-[#C9A84C] transition-colors font-medium">+234-806-700-7462</a><a href="tel:+2348052920626" className="block text-white hover:text-[#C9A84C] transition-colors font-medium">+234-080-5292-0626</a></div> },
                  { icon: MapPin, label: 'Address', content: <address className="text-white not-italic font-medium leading-relaxed">1A, Block D, Alhaji Adebayo Layout,<br />Apete, Ibadan, Oyo State, Nigeria.</address> },
                  { icon: Globe, label: 'Website', content: <a href="https://www.african4ir.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C9A84C] transition-colors font-medium">www.african4ir.com</a> },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(201,168,76,0.1)' }}>
                      <Icon size={18} style={{ color: '#C9A84C' }} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-sm" style={{ background: '#0D1F38', border: '1px solid rgba(201,168,76,0.2)' }}>
                <div className="text-xs font-medium tracking-wider uppercase mb-2" style={{ color: '#C9A84C' }}>Company Details</div>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>RC Number: <span className="text-white font-medium">3432957</span></div>
                  <div>Incorporated: <span className="text-white font-medium">2021</span></div>
                  <div>Country: <span className="text-white font-medium">Nigeria</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '2px solid #C9A84C' }}>
                    <Send size={24} style={{ color: '#C9A84C' }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        style={inputStyle} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        style={inputStyle} placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        style={inputStyle} placeholder="+234 ..." />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Subject *</label>
                      <select name="subject" required value={form.subject} onChange={handleChange} style={inputStyle}>
                        <option value="" style={{ background: '#0D1F38' }}>Select a subject</option>
                        <option value="training" style={{ background: '#0D1F38' }}>Training Enquiry</option>
                        <option value="research" style={{ background: '#0D1F38' }}>Research Partnership</option>
                        <option value="consultancy" style={{ background: '#0D1F38' }}>Consultancy</option>
                        <option value="events" style={{ background: '#0D1F38' }}>Events and Workshops</option>
                        <option value="projects" style={{ background: '#0D1F38' }}>Projects</option>
                        <option value="other" style={{ background: '#0D1F38' }}>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Message *</label>
                    <textarea name="message" required rows={6} value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: 'none' }} placeholder="Tell us how we can help you..." />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 font-bold text-sm rounded-sm transition-colors"
                    style={{ background: '#C9A84C', color: '#0A1628' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#E8C96B')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#C9A84C')}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 relative overflow-hidden" style={{ background: '#060E1C' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80)' }} />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="mx-auto mb-3" style={{ color: '#C9A84C' }} />
            <p className="text-white font-medium">Ibadan, Oyo State, Nigeria</p>
            <p className="text-gray-400 text-sm mt-1">1A, Block D, Alhaji Adebayo Layout, Apete</p>
            <a href="https://maps.google.com/?q=Apete,Ibadan,Oyo+State,Nigeria"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm hover:underline"
              style={{ color: '#C9A84C' }}>
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
