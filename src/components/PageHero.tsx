interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  tag?: string
}

export default function PageHero({ title, subtitle, image, tag }: PageHeroProps) {
  return (
    <section className="relative pt-20 min-h-[55vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(10,22,40,0.95) 0%,rgba(10,22,40,0.78) 60%,rgba(10,22,40,0.45) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A1628 0%, transparent 50%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {tag && (
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-sm"
            style={{ border: '1px solid rgba(201,168,76,0.4)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ background: '#C9A84C' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A84C' }}>{tag}</span>
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
          {title}
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  )
}
