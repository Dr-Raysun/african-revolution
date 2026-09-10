import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Leaf,
  BookOpen,
  TrendingUp,
  Shield,
  Heart,
  Factory,
  Lock,
  GraduationCap,
} from "lucide-react";

const sectors = [
  {
    icon: GraduationCap,
    label: "Academy",
    desc: "Training & Research excellence",
  },
  { icon: Leaf, label: "Agriculture", desc: "Agro-AI & Agro-IoT solutions" },
  {
    icon: BookOpen,
    label: "Education",
    desc: "E-learning & Adaptive learning",
  },
  { icon: TrendingUp, label: "Economy", desc: "AI-driven economic planning" },
  { icon: Shield, label: "Governance", desc: "Policy design & evaluation" },
  { icon: Heart, label: "Health", desc: "Smart & data-driven healthcare" },
  { icon: Factory, label: "Industry", desc: "AI-powered smart industry" },
  { icon: Lock, label: "Security", desc: "Cyber & biometric security" },
];

const stats = [
  { value: "8", label: "Sectors" },
  { value: "3", label: "Flagship Projects" },
  { value: "5", label: "Workshops" },
  { value: "2021", label: "Est." },
];

const services = [
  {
    title: "Training",
    desc: "Cutting-edge 4IR skills training for individuals and organisations across Africa.",
    icon: "🎓",
  },
  {
    title: "Research",
    desc: "Applied and transformative research driving African 4IR innovation forward.",
    icon: "🔬",
  },
  {
    title: "Consultancy",
    desc: "Strategic guidance for businesses, governments, and institutions embracing 4IR.",
    icon: "💡",
  },
];

const projects = [
  {
    num: "01",
    title: "AI-Assisted Employee Audit",
    desc: "Leveraging artificial intelligence to streamline and enhance workforce performance evaluation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    num: "02",
    title: "Smart Public Procurement System",
    desc: "A transparent, AI-driven procurement platform for public sector efficiency and accountability.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    num: "03",
    title: "XR for Safe Environment Training",
    desc: "Extended Reality solutions delivering immersive, risk-free safety training environments.",
    img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,rgba(10,22,40,0.96) 0%,rgba(10,22,40,0.84) 55%,rgba(10,22,40,0.38) 100%)",
          }}
        />
        {/* Gold accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 animate-fadeInUp rounded-sm"
              style={{ border: "1px solid rgba(201,168,76,0.4)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-gold"
                style={{ background: "#C9A84C" }}
              />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "#C9A84C" }}
              >
                RC: 3432957 · Incorporated 2023
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fadeInUp">
              Championing Africa's{" "}
              <span className="text-gold-gradient">4th Industrial</span>{" "}
              Revolution update
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-10 animate-fadeInUp">
              A4IR bridges African communities and institutions with the
              transformative power of artificial intelligence, IoT, and emerging
              technologies — building a continent-wide digital future.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-sm transition-colors"
                style={{ background: "#C9A84C", color: "#0A1628" }}
              >
                Discover A4IR <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-sm transition-colors hover:text-[#C9A84C]"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              >
                View Projects
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, #C9A84C, transparent)",
            }}
          />
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        style={{
          background: "#0D1F38",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-gradient mb-1">
                {value}
              </div>
              <div className="text-gray-400 text-sm tracking-wider uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#C9A84C" }}
                >
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Africa's 4IR Catalyst
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A4IR is a registered Nigerian company (RC: 3432957) dedicated to
                championing the African 4th Industrial Revolution. Since 2021,
                we have been building bridges between communities, governments,
                and industries through technology-driven solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We operate across eight critical sectors — from Agriculture and
                Health to Security and Governance — delivering training,
                research, and consultancy that positions Africa at the forefront
                of global technological progress.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4"
                style={{ color: "#C9A84C" }}
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="A4IR team collaboration"
                className="rounded-sm object-cover w-full h-[500px]"
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-sm shadow-2xl"
                style={{ background: "#C9A84C" }}
              >
                <div
                  className="font-display text-4xl font-bold"
                  style={{ color: "#0A1628" }}
                >
                  4IR
                </div>
                <div
                  className="text-xs font-medium tracking-wider uppercase mt-1"
                  style={{ color: "rgba(10,22,40,0.7)" }}
                >
                  For Africa
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-sm"
                style={{ border: "1px solid rgba(201,168,76,0.3)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className="py-24 section-divider"
        style={{ background: "#0A1628" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "#C9A84C" }}
              >
                What We Offer
              </span>
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three pillars of transformation — equipping Africa's people,
              institutions, and industries for the 4th Industrial Revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="p-8 rounded-sm card-hover group"
                style={{
                  background: "#0A1628",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-4xl mb-6">{icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-4"
                  style={{ color: "#C9A84C" }}
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors Grid ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#C9A84C" }}
                >
                  Coverage
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white">
                Eight Sectors
              </h2>
            </div>
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4"
              style={{ color: "#C9A84C" }}
            >
              View All Sectors <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map(({ icon: Icon, label, desc }) => (
              <Link
                to="/sectors"
                key={label}
                className="p-6 rounded-sm card-hover group"
                style={{
                  background: "#0D1F38",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 transition-colors"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  <Icon size={20} style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-[#C9A84C] transition-colors">
                  A4IR {label}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        className="py-24 section-divider"
        style={{ background: "#060E1C" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#C9A84C" }}
                >
                  Flagship Initiatives
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white">
                Our Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4"
              style={{ color: "#C9A84C" }}
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map(({ num, title, desc, img }) => (
              <div
                key={num}
                className="group overflow-hidden rounded-sm card-hover"
                style={{
                  background: "#0A1628",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #0A1628, transparent)",
                    }}
                  />
                  <div
                    className="absolute top-4 left-4 font-display text-5xl font-bold"
                    style={{ color: "rgba(201,168,76,0.18)" }}
                  >
                    {num}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,22,40,0.90)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(201,168,76,0.08), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Shape Africa's <br />
            <span className="text-gold-gradient">Digital Future?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Partner with A4IR and become part of a continent-wide movement
            driving innovation, inclusion, and impact through the 4th Industrial
            Revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-sm transition-colors"
              style={{ background: "#C9A84C", color: "#0A1628" }}
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-sm transition-colors hover:text-[#C9A84C]"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              Upcoming Events <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
