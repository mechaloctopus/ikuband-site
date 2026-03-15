import Image from "@/components/BaseImage";

export default function InvestSection() {
  return (
    <section id="invest" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Opportunity</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Investor <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            The global wearable health monitoring market is projected to reach $186B by 2030.
            IkuBand Institute is positioned at the convergence of the three most transformative
            trends in healthcare: miniaturized photonics, AI-driven diagnostics, and consumer wearables.
          </p>
        </div>

        {/* Market opportunity */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { value: "$186B", label: "Wearable Health Market (2030)", sub: "CAGR 18.2%" },
            { value: "$40B", label: "Continuous Glucose Monitoring", sub: "Fastest growing segment" },
            { value: "1.5B", label: "People with Undiagnosed Diabetes", sub: "Global unmet need" },
            { value: "936M", label: "Sleep Apnea Sufferers Worldwide", sub: "80% undiagnosed" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card-bg border border-card-border rounded-xl p-6 text-center card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Why invest */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Why IkuBand?</h3>
            <div className="space-y-4">
              {[
                {
                  title: "First-Mover in Ring-Based Spectroscopy",
                  desc: "No commercial ring integrates Raman or SWIR spectroscopy. We are building the IP foundation that will define this category.",
                },
                {
                  title: "Platform, Not Just a Product",
                  desc: "The modular ecosystem (ring + attachments + companion device + cloud) creates multiple revenue streams and deep user lock-in.",
                },
                {
                  title: "AI Moat Deepens Over Time",
                  desc: "Every user generates training data. More users = better ML models = more accurate readings = more users. A classic data flywheel.",
                },
                {
                  title: "Regulatory Pathway Exists",
                  desc: "FDA has cleared ring-based SpO2 devices. Our phased approach starts with cleared claims and expands to glucose — de-risking the regulatory journey.",
                },
                {
                  title: "Sleep Apnea Alone Is a Massive Market",
                  desc: "Even before glucose, our sleep apnea alerting ring addresses a $7.8B market with 80% of sufferers currently undiagnosed.",
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">{point.title}</div>
                    <div className="text-xs text-muted mt-1">{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Revenue Model</h3>
            <div className="space-y-4">
              {[
                {
                  stream: "Ring Hardware",
                  price: "$299–499",
                  desc: "Premium smart ring with 7-wavelength PPG, bioimpedance, temperature, sleep apnea alerting",
                },
                {
                  stream: "Pro Subscription",
                  price: "$14.99/mo",
                  desc: "Advanced analytics, AI health insights, doctor sharing, cloud storage, priority ML model updates",
                },
                {
                  stream: "Attachments",
                  price: "$49–199 each",
                  desc: "CGM bridge, ketone module, hormone patch — each sold separately with consumable replacement revenue",
                },
                {
                  stream: "Companion Device",
                  price: "$199–299",
                  desc: "Dedicated medical data hub with cellular connectivity and on-device ML processing",
                },
                {
                  stream: "Enterprise / Clinical",
                  price: "Custom",
                  desc: "Bulk licensing for clinical trials, remote patient monitoring programs, and insurance partners",
                },
              ].map((rev) => (
                <div key={rev.stream} className="flex items-start gap-4 p-3 rounded-lg bg-background/50">
                  <div className="shrink-0">
                    <div className="text-sm font-bold text-accent">{rev.price}</div>
                    <div className="text-[10px] text-muted">{rev.stream}</div>
                  </div>
                  <div className="text-xs text-muted">{rev.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive landscape */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-12 mb-12">
          <h3 className="text-xl font-semibold mb-8 text-center">Competitive Landscape</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left p-3 font-semibold text-xs uppercase tracking-wider text-muted">Feature</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider gradient-text">IkuBand</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted">Oura</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted">Samsung Ring</th>
                  <th className="text-center p-3 font-semibold text-xs uppercase tracking-wider text-muted">Ultrahuman</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Heart Rate / HRV", iku: "Yes", oura: "Yes", samsung: "Yes", ultra: "Yes" },
                  { feature: "SpO2", iku: "Yes", oura: "Yes", samsung: "Yes", ultra: "No" },
                  { feature: "Sleep Apnea Alert (Haptic)", iku: "Yes", oura: "No", samsung: "No", ultra: "No" },
                  { feature: "Blood Pressure (Cuffless)", iku: "Yes*", oura: "No", samsung: "No", ultra: "No" },
                  { feature: "Non-Invasive Glucose", iku: "Research", oura: "No", samsung: "No", ultra: "No" },
                  { feature: "Raman Spectroscopy", iku: "Yes", oura: "No", samsung: "No", ultra: "No" },
                  { feature: "Bioimpedance", iku: "Yes", oura: "No", samsung: "Skin Temp", ultra: "No" },
                  { feature: "Hormone Tracking", iku: "Attachment", oura: "No", samsung: "No", ultra: "No" },
                  { feature: "Modular Attachments", iku: "Yes", oura: "No", samsung: "No", ultra: "CGM bridge" },
                  { feature: "Companion Medical Device", iku: "Yes", oura: "No", samsung: "No", ultra: "No" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-card-border/50 hover:bg-white/[0.02]">
                    <td className="p-3 text-xs font-medium">{row.feature}</td>
                    <td className="p-3 text-xs text-center font-semibold text-accent">{row.iku}</td>
                    <td className="p-3 text-xs text-center text-muted">{row.oura}</td>
                    <td className="p-3 text-xs text-center text-muted">{row.samsung}</td>
                    <td className="p-3 text-xs text-center text-muted">{row.ultra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted mt-4 text-center">* Blood pressure available via AI model estimate; not a medical claim until FDA-cleared</p>
        </div>

        {/* Team needs / CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/ring-banner-sport.jpg"
              alt="Ring lifestyle"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative bg-gradient-to-r from-background/95 via-background/80 to-background/95 p-8 sm:p-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Join the <span className="gradient-text">IkuBand Mission</span>
            </h3>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              We are seeking visionary investors, research partners, photonics engineers, ML scientists,
              and biomedical experts to help build the future of non-invasive health diagnostics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:invest@ikuband.org"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-2 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg glow-cyan"
              >
                Contact for Investment
              </a>
              <a
                href="mailto:research@ikuband.org"
                className="px-8 py-3 rounded-full border border-card-border text-muted hover:text-white hover:border-accent/50 transition-all"
              >
                Research Partnerships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
