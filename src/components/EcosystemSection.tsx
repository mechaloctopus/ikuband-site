import Image from "next/image";

export default function EcosystemSection() {
  const attachments = [
    {
      name: "CGM Glucose Patch",
      desc: "Abbott FreeStyle Libre-style continuous glucose monitor that pairs via Bluetooth with IkuBand for real-time calibration and cross-validation of our non-invasive Raman readings.",
      status: "Partner Integration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      name: "Ketone Detection Module",
      desc: "Breath or sweat-based ketone sensor attachment for monitoring ketosis during fasting, ketogenic diets, or diabetic ketoacidosis risk. Beta-hydroxybutyrate (BHB) detection.",
      status: "In Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
        </svg>
      ),
    },
    {
      name: "Hormone Sweat Patch",
      desc: "Microfluidic patch with iontophoresis-induced sweat collection. Detects cortisol, epinephrine, norepinephrine via gold nanodendrite electrodes. Replaces blood cortisol tests.",
      status: "Research Prototype",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      name: "Microneedle ISF Patch",
      desc: "Painless dissolving microneedle array that samples interstitial fluid for direct glucose, lactate, and electrolyte measurement. Minimally invasive but near-painless — bridge to full non-invasive.",
      status: "Research",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
    },
    {
      name: "Inflammation Marker Module",
      desc: "Experimental optical attachment targeting C-reactive protein (CRP) and cytokine levels through advanced multi-wavelength spectral analysis with dedicated ML model.",
      status: "Concept",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
        </svg>
      ),
    },
    {
      name: "Blood Lipid Tracker",
      desc: "SWIR-enhanced attachment extending the ring's spectral range for cholesterol (HDL/LDL) and triglyceride trend monitoring via absorption spectroscopy + ML regression.",
      status: "Concept",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Ecosystem</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Ring + Attachments + <span className="gradient-text">Companion Device</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            The IkuBand ring is the core sensor platform. But true comprehensive diagnostics requires
            a modular ecosystem — Bluetooth-connected patches and attachments that extend capabilities,
            all feeding into a dedicated medical companion device.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12 mb-12">
          <h3 className="text-xl font-semibold mb-8 text-center">System Architecture</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Ring core */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 border-2 border-accent/30 flex items-center justify-center mb-4 glow-cyan">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Ring</div>
                  <div className="text-[10px] text-muted">Core Sensors</div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">IkuBand Ring</h4>
              <div className="text-xs text-muted space-y-1">
                <p>7-wavelength PPG</p>
                <p>Raman spectroscopy module</p>
                <p>Bioimpedance electrodes</p>
                <p>Temperature sensor</p>
                <p>3-axis accelerometer</p>
                <p>Haptic vibration motor</p>
                <p>BLE 5.3 radio</p>
                <p>7-day battery life</p>
              </div>
            </div>

            {/* Arrows + Bluetooth */}
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <div className="text-xs font-mono text-accent tracking-wider">BLUETOOTH 5.3</div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-accent" />
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
                </svg>
                <div className="w-16 h-px bg-accent" />
              </div>
              <div className="bg-background/50 rounded-lg border border-card-border px-4 py-3 text-center">
                <div className="text-xs font-semibold mb-1">Attachments</div>
                <div className="text-[10px] text-muted">CGM Patch • Sweat Sensor<br />Ketone Module • More</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-16 h-px bg-accent-2" />
                <svg className="w-5 h-5 text-accent-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <div className="w-16 h-px bg-accent-2" />
              </div>
              <div className="text-xs font-mono text-accent-2 tracking-wider">ENCRYPTED SYNC</div>
            </div>

            {/* Companion device */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-accent-2/20 to-accent/20 border-2 border-accent-2/30 flex items-center justify-center mb-4 glow-purple">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Hub</div>
                  <div className="text-[10px] text-muted">Medical OS</div>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Companion Device</h4>
              <div className="text-xs text-muted space-y-1">
                <p>Dedicated medical data phone</p>
                <p>Real-time dashboard display</p>
                <p>On-device ML inference</p>
                <p>Health alert system</p>
                <p>Doctor sharing portal</p>
                <p>Encrypted cloud backup</p>
                <p>Emergency SOS via cellular</p>
                <p>Multi-ring family support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Attachment cards */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          Modular <span className="gradient-text">Attachments</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attachments.map((att) => (
            <div key={att.name} className="bg-card-bg border border-card-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {att.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{att.name}</h4>
                  <span className="text-[10px] font-mono text-accent">{att.status}</span>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">{att.desc}</p>
            </div>
          ))}
        </div>

        {/* Sleep apnea feature highlight */}
        <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/ring-sleep-alert.webp"
                alt="Sleep apnea alert system"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card-bg/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2">Critical Feature</span>
              <h3 className="text-2xl font-bold mb-4">Sleep Apnea Guardian</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                IkuBand&apos;s primary clinical application. The ring continuously monitors SpO2 during sleep
                via dual-wavelength PPG. When blood oxygen drops below a configurable threshold (default 90%),
                the ring&apos;s <strong className="text-white">high-torque haptic motor</strong> delivers escalating
                vibration patterns strong enough to wake the wearer — potentially life-saving for obstructive
                sleep apnea sufferers.
              </p>
              <div className="space-y-2">
                {[
                  "Continuous overnight SpO2 trending with 1-second resolution",
                  "Configurable desaturation alert thresholds (85–95%)",
                  "Escalating haptic patterns: gentle → moderate → strong vibration",
                  "Morning report: Oxygen Desaturation Index (ODI), lowest SpO2, apnea event count",
                  "Data export for sleep specialists and CPAP therapy monitoring",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
