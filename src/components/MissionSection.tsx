import Image from "@/components/BaseImage";

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            IkuBand Institute is a research foundation dedicated to one audacious goal: a single ring
            that delivers a complete blood panel — without drawing a single drop of blood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision card */}
          <div className="gradient-border bg-card-bg p-8 rounded-xl card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">The Vision</h3>
                <p className="text-muted leading-relaxed">
                  Imagine wearing a sleek ring that continuously monitors your glucose, oxygen saturation,
                  heart rate, blood pressure, cortisol, lipids, and dozens of other biomarkers — streaming
                  data to a dedicated medical companion device. No needles. No lab visits. Just real-time
                  insight into your body&apos;s chemistry, 24 hours a day.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge card */}
          <div className="gradient-border bg-card-bg p-8 rounded-xl card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-2/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-accent-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                <p className="text-muted leading-relaxed">
                  True non-invasive blood analysis is one of the hardest problems in biomedical engineering.
                  The skin barrier, light scattering in tissue, interference from water, fat, and proteins —
                  these obstacles have kept direct bloodstream access without piercing the skin in the realm
                  of research prototypes. Until now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Sensor Precision",
              desc: "Ultra-precise optical, spectroscopic, and electrochemical sensors miniaturized to ring form factor.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
            },
            {
              title: "AI Interpretation",
              desc: "Machine learning models trained on massive biometric datasets to extract accurate molecular concentrations from raw sensor data.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              ),
            },
            {
              title: "Modular Ecosystem",
              desc: "Core ring plus Bluetooth-connected attachments — CGM patches, ketone sensors, hormone modules — for complete diagnostics.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card-bg border border-card-border rounded-xl p-6 card-hover text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width image banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-64 sm:h-80">
          <Image
            src="/images/body-scan-hud.jpg"
            alt="Full body diagnostic HUD visualization"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                A Blood Test <span className="gradient-text">Without Blood</span>
              </h3>
              <p className="text-muted text-sm sm:text-base">
                We are building the foundation for continuous, real-time, non-invasive monitoring
                of every biomarker that matters — from glucose and oxygen to cortisol, ketones,
                and inflammatory markers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
