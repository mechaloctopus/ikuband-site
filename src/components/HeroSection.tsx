import Image from "@/components/BaseImage";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted">Research Foundation — Est. 2025</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">IkuBand</span>
              <br />
              <span className="text-foreground">Institute</span>
            </h1>

            <p className="text-xl text-muted max-w-lg leading-relaxed">
              Pioneering the next generation of <span className="text-accent font-medium">non-invasive health diagnostics</span> through
              advanced smart ring technology, laser spectroscopy, and machine learning.
            </p>

            <p className="text-base text-muted/70 max-w-lg">
              Our mission: achieve medical-grade blood analysis — glucose, oxygen, hormones, lipids,
              and beyond — all from a single, stylish ring on your finger.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#science"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg glow-cyan"
              >
                Explore the Science
              </a>
              <a
                href="#invest"
                className="px-8 py-3 rounded-full border border-card-border text-muted hover:text-white hover:border-accent/50 transition-all backdrop-blur-sm"
              >
                Investor Overview
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "7+", label: "Sensor Modalities" },
                { value: "24/7", label: "Continuous Monitoring" },
                { value: "<5yr", label: "To Market" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ring image showcase */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-full blur-3xl scale-110" />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glow-cyan animate-pulse-ring">
                <Image
                  src="/images/ring-futuristic-cyan.jpg"
                  alt="IkuBand Smart Ring Concept"
                  fill
                  sizes="(max-width: 640px) 320px, 384px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-card-bg border border-card-border text-xs text-accent font-mono backdrop-blur-sm">
                SpO2 98%
              </div>
              <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full bg-card-bg border border-card-border text-xs text-green-400 font-mono backdrop-blur-sm">
                Glucose 95 mg/dL
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-full bg-card-bg border border-card-border text-xs text-accent-2 font-mono backdrop-blur-sm">
                HR 72 bpm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
